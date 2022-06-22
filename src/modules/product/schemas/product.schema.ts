import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ProductFamily } from '../../product-family/schemas/product-family.schema';
import { LanguageObject } from '../../../common/interfaces/common.interface';
import { ProductBrand } from '../../product-brand/schemas/product-brand.schema';
import { ProductType } from '../../product-type/schemas/product-type.schema';
import { ProductVariant } from '../../product-variant/schemas/product-variant.schema';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LanguageObject;

  @Prop()
  countryOfOrigin: string;

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
  crops: string;

  @Prop()
  productVariants: ProductVariant[];

  @Prop()
  mediaUrls: string[];

  @Prop()
  fertiliserComposition: string;

  @Prop()
  isMostPopular: boolean;

  @Prop()
  active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
