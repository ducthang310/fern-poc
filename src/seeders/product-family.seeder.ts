import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductFamily } from '../modules/product-family/schemas/product-family.schema';
import { EntityStatus } from '../common/interfaces/common.interface';

@Injectable()
export class ProductFamiliesSeeder implements Seeder {
  constructor(
    @InjectModel(ProductFamily.name)
    private readonly productFamilyModel: Model<ProductFamily>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductFamily).generate(2);
    const items: ProductFamily[] = [
      {
        name: {
          en: 'Yara product family 1 - name in English',
          te: 'Yara product family 1 - name in Telugu',
        },
        description: { en: 'Test description' },
        mediaUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: {
          en: 'Yara product family 2 - name in English',
          te: 'Yara product family 2 - name in Telugu',
        },
        description: { en: 'Test description' },
        mediaUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: {
          en: 'Yara product family 3 - name in English',
          te: 'Yara product family 3 - name in Telugu',
        },
        description: { en: 'Test description' },
        mediaUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
    ];

    return this.productFamilyModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productFamilyModel.deleteMany({});
  }
}