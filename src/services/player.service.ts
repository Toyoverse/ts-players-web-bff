import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import PlayerModel from '../models/Player.model'
import * as Parse from 'parse/node';
import { response } from 'express';
import { json } from 'stream/consumers';

@Injectable()
export class PlayerService {
  constructor(private configService: ConfigService) {
    this.ParseServerConfiguration();
  }

  async findPlayerByWalletAddress(walletAddress: string, transactionHash: string): Promise<PlayerModel>{
    const Players = Parse.Object.extend("Players", PlayerModel);
    const playerQuery = new Parse.Query(Players);
    playerQuery.equalTo('walletAddress', walletAddress);
    try{
      const result = await playerQuery.find();
    
      if (result.length === 0){
        return this.CreatePlayers(walletAddress, transactionHash);
      }

      this.VerifyDateToken(result[0], transactionHash);

      const player: PlayerModel = this.PlayerMapper(result[0]);

      return player;
    }
    catch(error){
      response.status(500).json({
        error: [error.message],
      });
    } 

  }
  async playerEnverinment(){
    return "ok";
  }
  private CreatePlayers(walletAddress: string, transactionHash:string ): PlayerModel{
    const Player = Parse.Object.extend("Players");
    const player = new Player();
    
    player.set("walletAddress", walletAddress);
    player.set('sessionToken', this.GenerateToken(walletAddress, transactionHash));
    player.set('sessionTokenExpiresAt', this.ExpiresAt());

    player.save()
      .then((player)=>{
        console.log('New player created with id: ' + player.id);
      }, () =>{
        return response.status(500).json({
          error: ['error trying to save player'],
        });
      });
    
    return this.PlayerMapper(player);
  }
  private GenerateToken(walletAddress:String, transactionHash:string): string{
    const token: string = jwt.sign({ walletId: walletAddress, transaction: transactionHash}, 
      process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return token;
  }

  private ExpiresAt():Date{
    const date: Date = new Date();
    const days:number = parseInt(process.env.TOKEN_EXPIRATION.charAt(0));

    date.setDate(date.getDate()+days);
    return date;
  }
  private PlayerMapper(result: Parse.Object<Parse.Attributes>): PlayerModel{
    const player: PlayerModel = new PlayerModel();

    player.wallet = result.get('walletAddress');
    player.token = result.get('sessionToken');
    player.expiresAt = result.get('sessionTokenExpiresAt');

    return player;
  }
  private VerifyDateToken(result: Parse.Object<Parse.Attributes>, hash: string):void{
    const now = new Date();

    if (result.get('sessionTokenExpiresAt') < now){
      result.set('sessionToken', this.GenerateToken(result.get('walletAddress'), hash));
      result.set('sessionTokenExpiresAt', this.ExpiresAt());

      result.save()
      .then((player)=>{
        console.log('Player with id: ' + player.id + ' updated');
      }, (error) =>{
        return response.status(500).json({
          error: ['Failed to update ' + error.message],
        });
      });
    }
  }

  /**
   * Function to configure ParseSDK
   */
  private ParseServerConfiguration(): void {
    Parse.initialize(
      this.configService.get<string>('BACK4APP_APPLICATION_ID'),
      this.configService.get<string>('BACK4APP_JAVASCRIPT_KEY'),
      this.configService.get<string>('BACK4APP_MASTER_KEY'),
    );
    (Parse as any).serverURL = this.configService.get<string>(
      'BACK4APP_SERVER_URL',
    );
  }
}
