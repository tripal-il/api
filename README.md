## How to Build the `gtfs.sqlite` Database

### 1. Download the Data

Visit the [Mobility Database MoT page](https://mobilitydatabase.org/feeds/gtfs/mdb-2519) and click on the **Producer Download URL**.  
This will download a `.zip` file containing all GTFS data (non–real-time) for Israel’s public transportation system in CSV format — including stops, lines, agencies, and more.

### 2. Extract the Zip File

Once downloaded, extract the `.zip` file. By default, the extracted folder is named: `israel-public-transportation`

### 3. Run the Script

Place the script `create.py` in the same directory as the extracted folder, and run it. The script will read the CSV files and convert them into an SQLite database named `gtfs.sqlite`.

> **Note:**  
> The `create.py` script is customized to work with a folder named `israel-public-transportation`.  
> If you rename the folder, you must update the script to reflect the new folder name.
