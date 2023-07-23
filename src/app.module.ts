//1. Node
import { join } from 'path';

//2. Nest
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
//3. Propios
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
    CommonModule,
  ],

  providers: [],
})
export class AppModule {}
