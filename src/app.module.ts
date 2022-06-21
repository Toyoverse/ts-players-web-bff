import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlayerController } from './controllers/player.controller';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { BoxService } from './services/box.service';
import { CardService } from './services/card.service';
import { PartService } from './services/part.service';
import { PlayerService } from './services/player.service';
import { ToyoService } from './services/toyo.service';
import { ToyoPersonaService } from './services/toyoPersona.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
  ],
  controllers: [PlayerController],
  providers: [
    PlayerService, 
    ToyoPersonaService, 
    PartService, 
    CardService,
    ToyoService,
    BoxService
  ],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
  .exclude(
    'player/login',
  )
  .forRoutes(PlayerController);
  }
}
