import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { ProductType } from '../modules/product-type/schemas/product-type.schema';
import { EntityStatus } from '../common/interfaces/common.interface';
import { sample } from 'lodash';

@Injectable()
export class ProductTypesSeeder implements Seeder {
  constructor(
    @InjectModel(ProductType.name)
    private readonly productTypeModel: Model<ProductType>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(ProductType).generate(2);
    const status = [
      EntityStatus.ACTIVE,
      EntityStatus.INACTIVE,
      EntityStatus.APPROVED,
    ];
    const items: ProductType[] = [
      {
        name: 'Yara product type 1',
        description: 'Test description',
        imageUrl: '',
        products: [],
        status: sample(status),
      },
      {
        name: 'Yara product type 2',
        description: 'Test description',
        imageUrl: '',
        products: [],
        status: sample(status),
      },
      {
        name: 'Yara product type 3',
        description: 'Test description',
        imageUrl: '',
        products: [],
        status: sample(status),
      },
    ];

    return this.productTypeModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productTypeModel.deleteMany({});
  }
}