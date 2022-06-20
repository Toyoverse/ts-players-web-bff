import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlayerController } from './controllers/player.controller';
import { AuthMiddleware } from './middlewares/auth.middleware';
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
