import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  LanguageObject,
  MasterLookup,
} from '../../../common/interfaces/common.interface';

export type CropDocument = Crop & Document;

@Schema({ timestamps: true, collection: 'crops' })
export class Crop {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Prop()
  imageUrls: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: string[];
}

export const CropSchema = SchemaFactory.createForClass(Crop);
