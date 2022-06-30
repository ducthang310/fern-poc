import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { LanguageObject } from '../../../common/interfaces/common.interface';

export type ProductFamilyDocument = ProductFamily & Document;

@Schema({ timestamps: true, collection: 'productFamilies' })
export class ProductFamily {
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
  products: string[];
}

export const ProductFamilySchema = SchemaFactory.createForClass(ProductFamily);
