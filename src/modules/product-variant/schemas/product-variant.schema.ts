import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

export type ProductVariantDocument = ProductVariant & Document;

@Schema({ timestamps: true, collection: 'productVariants' })
export class ProductVariant {
  @Factory((faker) => faker.random.arrayElement([40, 50, 60]))
  @Prop()
  maxPrice: number;

  @Factory((faker) => faker.random.arrayElement([10, 20, 30]))
  @Prop()
  minPrice: number;

  @Factory((faker) => faker.random.words())
  @Prop()
  sku: string;

  @Factory((faker) => faker.random.words())
  @Prop()
  volume: string;

  @Factory((faker) => faker.random.words())
  @Prop()
  packaging: string;

  @Factory((faker) => faker.random.words())
  @Prop()
  internalId: string;

  @Prop()
  imageUrls: string[];

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  active: boolean;
}

export const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);
