import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductFamily } from '../modules/product-family/schemas/product-family.schema';

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
        name: { default: 'Family 1' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { default: 'Family 2' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
    ];

    return this.productFamilyModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productFamilyModel.deleteMany({});
  }
}