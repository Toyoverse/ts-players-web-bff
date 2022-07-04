import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { Request, Response } from 'express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlayerResponse } from '../models/Player.model';
@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @ApiTags('player')
  @Post('/player/login')
  @ApiBody({
    schema: {
      properties: {
        walletAddress: { type: 'string' },
        transactionHash: { type: 'string' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    type: PlayerResponse,
  })
  async login(@Req() request: Request, @Res() response: Response) {
    const wallet: string = request.body.walletAddress;
    const transactionHash: string = request.body.transactionHash;

    if (!wallet || !transactionHash) {
      return response.status(400).json({
        errors: ['WalletAddress and transactionHash is required'],
      });
    }
    try {
      const player = await this.playerService.findPlayerByWalletAddress(
        wallet,
        transactionHash,
      );

      if (player.wallet === wallet) {
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
