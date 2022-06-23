import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductVariant } from '../modules/product-variant/schemas/product-variant.schema';

@Injectable()
export class ProductVariantsSeeder implements Seeder {
  constructor(
    @InjectModel(ProductVariant.name)
    private readonly productVariantModel: Model<ProductVariant>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductVariant).generate(2);
    const items: ProductVariant[] = [
      {
        name: { default: 'Variant 1' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { default: 'Variant 2' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
    ];

    return this.productVariantModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productVariantModel.deleteMany({});
  }
}