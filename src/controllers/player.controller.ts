import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { Request, Response } from 'express';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getHello(): string {
    return this.playerService.getHello();
  }

  @Post('/player/login')
  async login(@Req() request: Request, @Res() response: Response){
    const wallet: string = request.body.walletAddress;
    const transactionHash: string = request.body.transactionHash;
    
    if (!wallet || !transactionHash){
      return response.status(400).json({
        errors: ['WalletAddress and transactionHash is required'],
      });
    }
    const player = await this.playerService.findPlayerByWalletAddress(wallet, transactionHash);
    return response.status(200).json({
        token: player.token,
        expiresAt: player.getExpiresAtFormatted(player.expiresAt)
    });
  }
}
