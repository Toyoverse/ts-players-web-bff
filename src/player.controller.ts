import { Controller, Get } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getHello(): string {
    return this.playerService.getHello();
  }
}
