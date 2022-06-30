import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { LanguageObject } from '../../../common/interfaces/common.interface';

export type SubFamilyDocument = SubFamily & Document;

@Schema({ timestamps: true, collection: 'subFamilies' })
export class SubFamily {
  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  name: LanguageObject;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  description: LanguageObject;

  @Prop()
  imageUrls: string[];

  @Prop()
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: string[];
}

export const SubFamilySchema = SchemaFactory.createForClass(SubFamily);
