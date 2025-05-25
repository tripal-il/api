import { Controller, Get, Param } from '@nestjs/common';
import { StopService } from './stop.service';

@Controller('stops')
export class StopController {
  constructor(private readonly stopService: StopService) {}

  @Get(':stop_id')
  async getStop(@Param('stop_id') stop_id: number) {
    return this.stopService.stop(stop_id);
  }
}
