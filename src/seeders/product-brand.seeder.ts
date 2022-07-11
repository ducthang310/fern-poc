import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { ProductBrand } from '../modules/product-brand/schemas/product-brand.schema';
import { BaseSeeder } from './base.seeder';
import { EntityStatus } from '../common/interfaces/common.interface';

@Injectable()
export class ProductBrandsSeeder extends BaseSeeder implements Seeder {
  constructor(
    @InjectModel(ProductBrand.name)
    private readonly productBrandModel: Model<ProductBrand>,
  ) {
    super();
  }

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductBrand).generate(2);
    // const status = [
    //   EntityStatus.ACTIVE,
    //   EntityStatus.INACTIVE,
    //   EntityStatus.APPROVED,
    // ];
    // const items: any[] = [
    //   {
    //     name: 'Yara product brand 1',
    //     products: [],
    //     status: sample(status),
    //   },
    //   {
    //     name: 'Yara product brand 2',
    //     products: [],
    //     status: sample(status),
    //   },
    //   {
    //     products: [],
    //     status: sample(status),
    //   },
    // ];

    const items = await this.getData('product-brands.json');
    const failedItems = [];
    for (const name of items) {
      try {
        await this.productBrandModel.create({
          name,
          products: [],
          status: EntityStatus.ACTIVE,
        });
      } catch (e) {
        failedItems.push({
          data: name,
          error: e && e.toString(),
        });
      }
    }
    if (failedItems.length) {
      await this.createErrorFile(
        'product-brands.json',
        JSON.stringify(failedItems),
      );
      return;
    }

    return;
  }

  async drop(): Promise<any> {
    return this.productBrandModel.deleteMany({});
  }
}