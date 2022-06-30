import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  MasterLookup,
  LanguageObject,
  CompactObject,
  MasterLookupWithLocalization
} from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';
import { VolumeMetric } from '../contants';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Factory((faker) => ({ en: faker.commerce.productName() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Factory((faker) => ({ en: faker.lorem.paragraph() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LanguageObject;

  @Prop()
  productBrands: MasterLookupWithLocalization[];

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  productFamily: MasterLookup;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  subFamily: MasterLookup;

  @Prop()
  productTypes: MasterLookupWithLocalization[];

  @Prop()
  materialId: string;

  @Prop()
  tenant: number;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  manufacturer: MasterLookup;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  applicationType: MasterLookup;

  @Prop()
  crops: MasterLookup[];

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.address.countryCode(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  region: CompactObject;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  initiative: CompactObject;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  packagingType: CompactObject;

  @Prop()
  mediaUrls: string[];

  @Factory((faker) => faker.random.arrayElement([10, 20, 30]))
  @Prop()
  volumeUnit: number;

  @Factory((faker) =>
    faker.random.arrayElement([
      VolumeMetric.METRIC_1,
      VolumeMetric.METRIC_2,
      VolumeMetric.METRIC_3,
    ]),
  )
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  volumeMetric: VolumeMetric;

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  isMostPopular: boolean;

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  active: boolean;

  @Prop()
  productVariants: MasterLookup[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
