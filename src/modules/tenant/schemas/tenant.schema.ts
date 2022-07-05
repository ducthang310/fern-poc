import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

export type TenantDocument = Tenant & Document;

@Schema({ timestamps: true, collection: 'tenants' })
export class Tenant {
  @Factory((faker) => faker.address.country())
  @Prop()
  name: string;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
