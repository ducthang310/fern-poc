import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

export type ProductTypeDocument = ProductType & Document;

@Schema({ timestamps: true, collection: 'productTypes' })
export class ProductType {
  @Factory((faker) => faker.company.companyName())
  @Prop()
  name: string;

  @Factory((faker) => faker.lorem.paragraph())
  @Prop()
  description: string;

  @Prop()
  imageUrls: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: string[];
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
