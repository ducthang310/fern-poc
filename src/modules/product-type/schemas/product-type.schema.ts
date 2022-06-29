import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  LanguageObject,
  MasterLookup,
} from '../../../common/interfaces/common.interface';

export type ProductTypeDocument = ProductType & Document;

@Schema({ timestamps: true, collection: 'productTypes' })
export class ProductType {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LanguageObject;

  @Prop()
  imageUrls: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: MasterLookup[];
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
