import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
	constructor(private readonly pokemonService: PokemonService) {}

	@Get()
	async getPokemon() {
		return this.pokemonService.getPokemon();
	}

	@Get(':id')
	async getPokemonById(@Param('id') id: string) {
		return this.pokemonService.getPokemonById(id);
	}
}
