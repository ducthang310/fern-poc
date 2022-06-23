import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { Crop } from '../modules/crop/schemas/crop.schema';

@Injectable()
export class CropsSeeder implements Seeder {
  constructor(
    @InjectModel(Crop.name)
    private readonly cropModel: Model<Crop>,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(Crop).generate(2);
    const items: Crop[] = [
      {
        name: { default: 'Crop 1' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
      {
        name: { default: 'Crop 2' },
        description: { default: 'Test description' },
        imageUrls: [],
        products: [],
      },
    ];

    return this.cropModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.cropModel.deleteMany({});
  }
}