import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Move extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  power: number;

  @Prop({ required: true })
  accuracy: number;

  @Prop({ required: true })
  pp: number;
}

export const MoveSchema = SchemaFactory.createForClass(Move);
