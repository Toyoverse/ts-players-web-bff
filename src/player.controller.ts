import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Request, Response } from 'express';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getHello(): string {
    return this.playerService.getHello();
  }

  @Post()
  login(@Req() request: Request, @Res() response: Response): string {
    return this.playerService.findPlayerByWalletAddress();
  }
}
