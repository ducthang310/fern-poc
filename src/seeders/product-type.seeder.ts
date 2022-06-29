import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductType } from '../modules/product-type/schemas/product-type.schema';

@Injectable()
export class ProductTypesSeeder implements Seeder {
  constructor(
    @InjectModel(ProductType.name)
    private readonly productTypeModel: Model<ProductType>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductType).generate(2);
    const items: ProductType[] = [
      {
        name: { en: 'Type 1' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { en: 'Type 2' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { en: 'Type 3' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
      },
    ];

    return this.productTypeModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productTypeModel.deleteMany({});
  }
}