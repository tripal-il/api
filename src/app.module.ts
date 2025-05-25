import { Module } from '@nestjs/common';
import { StopModule } from './stop/stop.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [StopModule, PrismaModule],
})
export class AppModule {}
