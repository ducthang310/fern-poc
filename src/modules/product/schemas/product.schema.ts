import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ProductFamily } from '../../product-family/schemas/product-family.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  shortDescription: string;

  @Prop()
  productFamilies: ProductFamily[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
