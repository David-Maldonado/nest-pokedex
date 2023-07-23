import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([
      {
        //pero no es name del entity, es una propiedad del Document,
        //aqui ya se crea ya el Document en la db, al "mappear el entity"
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),
  ],
})
export class PokemonModule {}
