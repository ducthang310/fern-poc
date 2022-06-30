import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { LanguageObject, MasterLookup } from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';

export type ProductBrandDocument = ProductBrand & Document;

@Schema({ timestamps: true, collection: 'productBrands' })
export class ProductBrand {
  @Factory((faker) => ({ en: faker.company.companyName() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Factory((faker) => ({ en: faker.lorem.paragraph() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description?: LanguageObject;

  @Prop()
  imageUrls?: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products?: MasterLookup[];
}

export const ProductBrandSchema = SchemaFactory.createForClass(ProductBrand);
