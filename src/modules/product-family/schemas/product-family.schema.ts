import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { EntityStatus, LocalisedValue } from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';

export type ProductFamilyDocument = ProductFamily & Document;

@Schema({ timestamps: true, collection: 'productFamilies' })
export class ProductFamily {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LocalisedValue;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LocalisedValue;

  @Prop()
  mediaUrls: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: string[];

  @Factory((faker) =>
    faker.random.arrayElement([
      EntityStatus.ACTIVE,
      EntityStatus.INACTIVE,
      EntityStatus.APPROVED,
    ]),
  )
  @Prop()
  status: EntityStatus;
}

export const ProductFamilySchema = SchemaFactory.createForClass(ProductFamily);
