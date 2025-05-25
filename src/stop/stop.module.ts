import { Module } from '@nestjs/common';
import { StopService } from './stop.service';
import { StopController } from './stop.controller';

@Module({
  providers: [StopService],
  controllers: [StopController]
})
export class StopModule {}
