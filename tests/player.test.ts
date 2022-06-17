import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from '../src/controllers/player.controller';
import { PlayerService } from '../src/services/player.service';

describe('PlayerController', () => {
  let PlayersController: PlayerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [PlayerService],
    }).compile();

    PlayersController = app.get<PlayerController>(PlayerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(PlayersController.getHello()).toBe('Hello World!');
    });
  });
});
