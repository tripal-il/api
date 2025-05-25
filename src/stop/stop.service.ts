import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StopService {
  constructor(private prisma: PrismaService) {}

  arrivals(stop_id: string) {
    // TODO
  }

  async stop(stop_id: number) {
    const stop = await this.prisma.stop.findUnique({
      where: { stop_id: Number(stop_id) },
    });

    return stop;
  }

  async all() {
    const stops = await this.prisma.stop.findMany();

    console.log(stops);
    return stops;
  }
}
