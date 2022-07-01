import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { EntityStatus, LocalisedValue } from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';

export type SubFamilyDocument = SubFamily & Document;

@Schema({ timestamps: true, collection: 'subFamilies' })
export class SubFamily {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LocalisedValue;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LocalisedValue;

  @Prop()
  productFamilyId: string;

  @Prop()
  imageUrls: string[];

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

export const SubFamilySchema = SchemaFactory.createForClass(SubFamily);
