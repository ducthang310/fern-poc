import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { EntityStatus } from '../../../common/interfaces/common.interface';

export type ProductBrandDocument = ProductBrand & Document;

@Schema({ timestamps: true, collection: 'productBrands' })
export class ProductBrand {
  @Factory((faker) => faker.company.companyName())
  @Prop()
  name: string;

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

export const ProductBrandSchema = SchemaFactory.createForClass(ProductBrand);
