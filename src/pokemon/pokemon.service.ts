import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.pokeApiUrl = this.configService.get('POKE_API_URL') + '/pokemon';
  }

  async getPokemon() {
    const response = await fetch(this.pokeApiUrl);
    const data: unknown = await response.json();
    return data;
  }

  async getPokemonById(id: string) {
    const response = await fetch(`${this.pokeApiUrl}/${id}`);
    const data: unknown = await response.json();
    return data;
  }
}
