//1. Node
import { join } from 'path';

//2. Nest
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
//3. Propios
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config/env.cong';

@Module({
  imports: [
    // la posicion de donde es llamado el ConfigModule importa, llamar siempre al inicio
    ConfigModule.forRoot({
      load: [EnvConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],

  providers: [],
})
export class AppModule {
  // constructor() {
  //   console.log(process.env);
  // }
}
