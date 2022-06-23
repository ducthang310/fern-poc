import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ProductFamily } from '../../product-family/schemas/product-family.schema';
import { LanguageObject } from '../../../common/interfaces/common.interface';
import { ProductBrand } from '../../product-brand/schemas/product-brand.schema';
import { ProductType } from '../../product-type/schemas/product-type.schema';
import { ProductVariant } from '../../product-variant/schemas/product-variant.schema';
import { Factory } from 'nestjs-seeder';
import { Crop } from '../../crop/schemas/crop.schema';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Factory((faker) => ({ default: faker.commerce.productName() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Factory((faker) => ({ default: faker.lorem.paragraph() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LanguageObject;

  @Factory((faker) => faker.address.countryCode())
  @Prop()
  countryOfOrigin: string;

  @Factory((faker) => faker.company.companyName())
  @Prop()
  manufacturerName: string;

  @Prop()
  country: string[];

  @Prop()
  productBrands: ProductBrand[];

  @Prop()
  productType: ProductType[];

  @Prop()
  // @Prop({
  //   type: [{ type: MongooseSchema.Types.ObjectId, ref: 'ProductFamily' }],
  // })
  productFamilies: ProductFamily[];

  @Prop()
  crops: Crop[];

  @Prop()
  productVariants: ProductVariant[];

  @Prop()
  mediaUrls: string[];

  @Factory((faker) => faker.random.words())
  @Prop()
  fertiliserComposition: string;

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  isMostPopular: boolean;

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
