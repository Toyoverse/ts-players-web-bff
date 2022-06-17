import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { Request, Response } from 'express';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/player/login')
  async login(@Req() request: Request, @Res() response: Response) {
    const wallet: string = request.body.walletAddress;
    const transactionHash: string = request.body.transactionHash;

    if (!wallet || !transactionHash) {
      return response.status(400).json({
        errors: ['WalletAddress and transactionHash is required'],
      });
    }
    try{
      const player = await this.playerService.findPlayerByWalletAddress(wallet, transactionHash);
      
      if (player.wallet === wallet){

        return response.status(200).json({
          token: player.token,
          expiresAt: player.getExpiresAtFormatted(player.expiresAt),
        });
      } else {
        return response.status(500).json({
          error: ['The informed player does not match the returned player'],
        });
      }
    } catch {
      return response.status(500).json({
        errors: ['Error could not return player'],
      });
    }
  }
}
