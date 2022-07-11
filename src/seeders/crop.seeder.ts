import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { Crop } from '../modules/crop/schemas/crop.schema';
import { EntityStatus } from '../common/interfaces/common.interface';
import { BaseSeeder } from './base.seeder';

@Injectable()
export class CropsSeeder extends BaseSeeder implements Seeder {
  constructor(
    @InjectModel(Crop.name)
    private readonly cropModel: Model<Crop>,
  ) {
    super();
  }

  async seed(): Promise<any> {
    const data = await this.getData('product-families.json');
    const items: any[] = data.data.items;
    const failedItems = [];
    for (const item of items) {
      try {
        await this.cropModel.create({
          name: item.cropName,
          mediaUrls: [item.imageUrl],
          products: [],
          status: EntityStatus.ACTIVE,
        });
      } catch (e) {
        failedItems.push({
          data: item.cropName,
          error: e && e.toString(),
        });
      }
    }
    if (failedItems.length) {
      await this.createErrorFile(
        'product-families.json',
        JSON.stringify(failedItems),
      );
      return;
    }

    return;
  }

  async drop(): Promise<any> {
    return this.cropModel.deleteMany({});
  }
}