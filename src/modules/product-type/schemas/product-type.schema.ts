import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { EntityStatus } from '../../../common/interfaces/common.interface';

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

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
