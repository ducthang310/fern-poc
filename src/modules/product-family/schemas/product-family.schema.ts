import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../../product/schemas/product.schema';

export type ProductFamilyDocument = ProductFamily & Document;

@Schema()
export class ProductFamily {
  @Prop()
  name: string;

  @Prop()
  level: string;

  @Prop()
  products: Product[];
}

export const ProductFamilyFamilySchema =
  SchemaFactory.createForClass(ProductFamily);
