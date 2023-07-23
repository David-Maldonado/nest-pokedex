import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    //name del modelo
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    // los adaptadores son buenos para manejar mejor la dependencia de terceros, por si hayan cambios hacerlo en el adaptador y no en cada referencia en el proyecto
    private readonly http: AxiosAdapter,
  ) {}
  // en los servicios se centralizan la logica de negocio

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      await this.pokemonModel.create({ name, no });
    });

    return 'Seed executed';
  }
}

// es buena practica mostrar las dependencias y no sean ocultas, es decir: no usar directamente axios.get() dentro de un metodo sin mostrar de donde viene,
//  en este ejemplo se utiliza una buena practica
