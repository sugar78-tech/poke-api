import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { ConfigModule } from '@nestjs/config';
describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
      imports: [ConfigModule],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
