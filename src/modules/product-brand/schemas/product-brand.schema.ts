import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

export type ProductBrandDocument = ProductBrand & Document;

@Schema({ timestamps: true, collection: 'productBrands' })
export class ProductBrand {
  @Factory((faker) => faker.company.companyName())
  @Prop()
  name: string;

  @Factory((faker) => faker.lorem.paragraph())
  @Prop()
  description?: string;

  @Prop()
  imageUrls?: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: string[];
}

export const ProductBrandSchema = SchemaFactory.createForClass(ProductBrand);
