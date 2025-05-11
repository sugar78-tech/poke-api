import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ability, AbilitySchema } from './ability.schema';
import { Move, MoveSchema } from './move.schema';

@Schema()
export class Pokemon extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ type: [AbilitySchema] })
  abilities: Ability[];

  @Prop({ type: [MoveSchema] })
  moves: Move[];
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
