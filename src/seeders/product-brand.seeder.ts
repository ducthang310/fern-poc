import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductBrand } from '../modules/product-brand/schemas/product-brand.schema';
import { EntityStatus } from '../common/interfaces/common.interface';

@Injectable()
export class ProductBrandsSeeder implements Seeder {
  constructor(
    @InjectModel(ProductBrand.name)
    private readonly productBrandModel: Model<ProductBrand>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductBrand).generate(2);
    const items: ProductBrand[] = [
      {
        name: 'Yara brand 1',
        description: 'Test description',
        imageUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: 'Yara brand 2',
        description: 'Test description',
        imageUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: 'Yara brand 3',
        description: 'Test description',
        imageUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
    ];

    return this.productBrandModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productBrandModel.deleteMany({});
  }
}