import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  MasterLookup,
  LocalisedValue,
  CompactObject,
  EntityStatus,
} from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';
import { Metric } from '../contants';
import { sample } from 'lodash';
import { AuditTrail, ProductVariant } from '../product.interfaces';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  productTenant: MasterLookup;

  @Factory((faker) => ({ en: faker.commerce.productName() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LocalisedValue;

  @Prop()
  productBrands: MasterLookup[];

  @Prop()
  productFamilies: MasterLookup[];

  @Prop()
  productTypes: MasterLookup[];

  @Factory((faker) => faker.random.words())
  @Prop()
  materialId: string;

  @Factory((faker) => ({ en: faker.lorem.paragraph() }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LocalisedValue;

  @Factory((faker) => ({
    id: faker.random.number(),
    name: faker.address.countryCode(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  countryOfOrigin: CompactObject;

  @Factory((faker) => ({
    id: faker.random.number(),
    name: faker.commerce.productName(),
  }))
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  manufacturer: CompactObject;

  @Prop()
  crops: MasterLookup[];

  @Factory((faker) => [
    {
      id: faker.random.number(),
      name: faker.address.countryCode(),
    },
    {
      id: faker.random.number(),
      name: faker.address.countryCode(),
    },
  ])
  @Prop()
  regions: CompactObject[];

  @Factory((faker) => [
    {
      id: faker.random.number(),
      name: faker.address.countryCode(),
    },
    {
      id: faker.random.number(),
      name: faker.address.countryCode(),
    },
  ])
  @Prop()
  counties: CompactObject[];

  @Factory((faker) => [
    {
      id: faker.random.number(),
      name: faker.address.countryCode(),
    },
    {
      id: faker.random.number(),
      name: faker.address.countryCode(),
    },
  ])
  @Prop()
  wards: CompactObject[];

  @Factory((faker) => [
    {
      packagingType: faker.random.words(),
      volume: faker.random.words(),
      metric: sample([Metric.METRIC_1, Metric.METRIC_2, Metric.METRIC_3]),
      mediaUrls: [],
    },
  ])
  @Prop()
  productVariants: ProductVariant[];

  @Prop()
  mediaUrls: string[];

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  isMostPopular: boolean;

  @Factory((faker) =>
    faker.random.arrayElement([
      EntityStatus.ACTIVE,
      EntityStatus.INACTIVE,
      EntityStatus.APPROVED,
    ]),
  )
  @Prop()
  status: EntityStatus;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  auditTrail: AuditTrail;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
