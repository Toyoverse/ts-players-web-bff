import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { ToyoPersonaService } from './services/toyoPersona.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
  ],
  controllers: [PlayerController],
  providers: [PlayerService, ToyoPersonaService],

})
export class AppModule {}
