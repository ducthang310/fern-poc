import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { ProductBrand } from '../modules/product-brand/schemas/product-brand.schema';
import { EntityStatus } from '../common/interfaces/common.interface';
import { sample } from 'lodash';
import { readFileSync } from 'fs';
import { BaseSeeder } from './base.seeder';

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

    const filePath = './databases/seed-data/product-brands.json';
    let items: any[];
    let errorMessage = "There's no items on the file";
    try {
      const data = readFileSync(filePath, 'utf8');
      items = JSON.parse(data);
    } catch (e) {
      errorMessage = e.toString();
    }
    if (!items || !items.length) {
      // Create a error file
      await this.createErrorFile(filePath, errorMessage);
      return;
    }

    const failedItems = [];
    for (const item of items) {
      try {
        await this.productBrandModel.create(item);
      } catch (e) {
        failedItems.push({
          data: item,
          error: e && e.toString(),
        });
      }
    }
    if (failedItems.length) {
      await this.createErrorFile(filePath, JSON.stringify(failedItems));
      return;
    }

    return;
  }

  async drop(): Promise<any> {
    return this.productBrandModel.deleteMany({});
  }
}