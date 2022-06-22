import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Product } from '../../product/schemas/product.schema';
import { LanguageObject } from '../../../common/interfaces/common.interface';

export type ProductVariantDocument = ProductVariant & Document;

@Schema({ timestamps: true, collection: 'productVariants' })
export class ProductVariant {
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
  products: Product[];
}

export const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);
