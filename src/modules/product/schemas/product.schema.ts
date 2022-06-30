import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  MasterLookup,
  LanguageObject,
  CompactObject,
  EntityStatus,
} from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';
import { VolumeMetric } from '../contants';

export interface ProductVariant {
  sku: string;
  packagingType: string;
  volume: string;
  photoUrls: string[];
  internalId: string;
  status: EntityStatus;
}

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
  productBrands: MasterLookup[];

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  productFamily: MasterLookup;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  subFamily: MasterLookup;

  @Prop()
  productTypes: MasterLookup[];

  @Factory((faker) => faker.random.words())
  @Prop()
  materialId: string;

  @Factory((faker) => faker.random.number())
  @Prop()
  tenant: number;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.address.countryCode(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  countryOfOrigin: CompactObject;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  manufacturer: CompactObject;

  @Factory((faker) => ({
    id: faker.random.arrayElement([12, 13, 14, 15, 16, 17, 18]),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  applicationType: CompactObject;

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

  @Factory((faker) => faker.address.countryCode())
  @Prop()
  country: string;

  @Factory((faker) => faker.address.countryCode())
  @Prop()
  ward: string;

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

  @Factory((faker) => ({
    sku: faker.random.words(6).toLowerCase().split(' ').join('-'),
    packagingType: faker.random.words(),
    volume: faker.random.words(),
    photoUrls: [],
    internalId: faker.random.words(),
    status: faker.random.arrayElement([
      EntityStatus.ACTIVE,
      EntityStatus.INACTIVE,
      EntityStatus.APPROVED,
    ]),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  productVariants: ProductVariant[];

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

  @Factory((faker) => faker.random.arrayElement([EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.APPROVED]))
  @Prop()
  status: EntityStatus;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
