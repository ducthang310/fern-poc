import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { Tenant } from '../modules/tenant/schemas/tenant.schema';

@Injectable()
export class TenantsSeeder implements Seeder {
  constructor(
    @InjectModel(Tenant.name)
    private readonly tenantModel: Model<Tenant>,
  ) {}

  async seed(): Promise<any> {
    const items = DataFactory.createForClass(Tenant).generate(10);

    return this.tenantModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.tenantModel.deleteMany({});
  }
}