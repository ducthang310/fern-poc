import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  EntityStatus,
  LocalisedValue,
} from '../../../common/interfaces/common.interface';
import { Factory } from 'nestjs-seeder';

export type CropDocument = Crop & Document;

@Schema({ timestamps: true, collection: 'crops' })
export class Crop {
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

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

export const CropSchema = SchemaFactory.createForClass(Crop);
