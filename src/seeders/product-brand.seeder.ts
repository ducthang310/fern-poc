import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductBrand } from '../modules/product-brand/schemas/product-brand.schema';
import { EntityStatus } from '../common/interfaces/common.interface';
import { sample } from 'lodash';

@Injectable()
export class ProductBrandsSeeder implements Seeder {
  constructor(
    @InjectModel(ProductBrand.name)
    private readonly productBrandModel: Model<ProductBrand>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductBrand).generate(2);
    const status = [
      EntityStatus.ACTIVE,
      EntityStatus.INACTIVE,
      EntityStatus.APPROVED,
    ];
    const items: ProductBrand[] = [
      {
        name: 'Yara product brand 1',
        products: [],
        status: sample(status),
      },
      {
        name: 'Yara product brand 2',
        products: [],
        status: sample(status),
      },
      {
        name: 'Yara product brand 3',
        products: [],
        status: sample(status),
      },
    ];

    return this.productBrandModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productBrandModel.deleteMany({});
  }
}