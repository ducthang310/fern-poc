import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductFamily } from '../modules/product-family/schemas/product-family.schema';
import { EntityStatus } from '../common/interfaces/common.interface';
import { BaseSeeder } from './base.seeder';

@Injectable()
export class ProductFamiliesSeeder extends BaseSeeder implements Seeder {
  constructor(
    @InjectModel(ProductFamily.name)
    private readonly productFamilyModel: Model<ProductFamily>,
  ) {
    super();
  }

  async seed(): Promise<any> {
    const data = await this.getData('product-families.json');
    const items: any[] = data.data.items;
    const failedItems = [];
    for (const item of items) {
      try {
        await this.productFamilyModel.create({
          name: item.categoryName,
          description: { en: item.productCategoryDescription },
          mediaUrls: [item.imageUrl],
          products: [],
          status: EntityStatus.ACTIVE,
        });
      } catch (e) {
        failedItems.push({
          data: item.categoryName,
          error: e && e.toString(),
        });
      }
    }
    if (failedItems.length) {
      await this.createErrorFile(
        'product-families.json',
        JSON.stringify(failedItems),
      );
      return;
    }

    return;
  }

  async drop(): Promise<any> {
    return this.productFamilyModel.deleteMany({});
  }
}