import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { ProductType } from '../modules/product-type/schemas/product-type.schema';
import { BaseSeeder } from './base.seeder';
import { EntityStatus } from '../common/interfaces/common.interface';

@Injectable()
export class ProductTypesSeeder extends BaseSeeder implements Seeder {
  constructor(
    @InjectModel(ProductType.name)
    private readonly productTypeModel: Model<ProductType>,
  ) {
    super();
  }

  async seed(): Promise<any> {
    const items = await this.getData('product-types.json');
    const failedItems = [];
    for (const name of items) {
      try {
        await this.productTypeModel.create({
          name,
          description: null,
          products: [],
          imageUrl: null,
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
        'product-types.json',
        JSON.stringify(failedItems),
      );
      return;
    }

    return;
  }

  async drop(): Promise<any> {
    return this.productTypeModel.deleteMany({});
  }
}