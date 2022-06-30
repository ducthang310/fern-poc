import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { SubFamily } from '../modules/sub-family/schemas/sub-family.schema';

@Injectable()
export class SubFamiliesSeeder implements Seeder {
  constructor(
    @InjectModel(SubFamily.name)
    private readonly productFamilyModel: Model<SubFamily>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(SubFamily).generate(2);
    const items: SubFamily[] = [
      {
        name: { en: 'Sub Family 1' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { en: 'Sub Family 2' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { en: 'Sub Family 3' },
        description: { en: 'Test description' },
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