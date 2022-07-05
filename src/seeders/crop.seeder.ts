import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { Crop } from '../modules/crop/schemas/crop.schema';
import { EntityStatus } from '../common/interfaces/common.interface';

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
        name: {
          en: 'Crop 1 - name in English',
          te: 'Crop 1 - name in Telugu',
        },
        imageUrl: '',
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: {
          en: 'Crop 2 - name in English',
          te: 'Crop 2 - name in Telugu',
        },
        imageUrl: '',
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: {
          en: 'Crop 3 - name in English',
          te: 'Crop 3 - name in Telugu',
        },
        imageUrl: '',
        products: [],
        status: EntityStatus.ACTIVE,
      },
    ];

    return this.cropModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.cropModel.deleteMany({});
  }
}