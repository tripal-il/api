import pandas as pd
import sqlite3
import os

gtfs = 'israel-public-transportation'
db_path = 'gtfs.sqlite'

conn = sqlite3.connect(db_path)

for f in os.listdir(gtfs):
    if f.endswith('.txt'):
        print(f'Processing {f}')
        df = pd.read_csv(os.path.join(gtfs, f))
        df.to_sql(f[:-4], conn, if_exists='replace', index=False)
        print(f'Created table {f[:-4]}')

conn.close()