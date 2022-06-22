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
    const users = DataFactory.createForClass(ProductBrand).generate(10);

    return this.productBrandModel.insertMany(users);
  }

  async drop(): Promise<any> {
    return this.productBrandModel.deleteMany({});
  }
}