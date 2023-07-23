import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//cada instancia de la clase es un registro en la db.
@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
