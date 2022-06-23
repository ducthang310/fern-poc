import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductBrand } from '../modules/product-brand/schemas/product-brand.schema';

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
        name: { default: 'Brand 1' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { default: 'Brand 2' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
    ];

    return this.productBrandModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productBrandModel.deleteMany({});
  }
}