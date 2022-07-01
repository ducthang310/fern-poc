import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductType } from '../modules/product-type/schemas/product-type.schema';
import { EntityStatus } from '../common/interfaces/common.interface';

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
        name: 'Yara product type 1',
        description: 'Test description',
        imageUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: 'Yara product type 2',
        description: 'Test description',
        imageUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: 'Yara product type 3',
        description: 'Test description',
        imageUrls: [],
        products: [],
        status: EntityStatus.ACTIVE,
      },
    ];

    return this.productTypeModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productTypeModel.deleteMany({});
  }
}