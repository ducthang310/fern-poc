import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { SubFamily } from '../modules/sub-family/schemas/sub-family.schema';
import { EntityStatus } from '../common/interfaces/common.interface';
import { ProductFamilyService } from '../modules/product-family/services/product-family.service';
import { sample } from 'lodash';

@Injectable()
export class SubFamiliesSeeder implements Seeder {
  constructor(
    @InjectModel(SubFamily.name)
    private readonly subFamilyModel: Model<SubFamily>,
    private readonly productFamilyService: ProductFamilyService,
  ) {}

  async seed(): Promise<any> {
    // const items = DataFactory.createForClass(SubFamily).generate(2);
    const allFamilies = await this.productFamilyService.findAll();
    const items: SubFamily[] = [
      {
        name: { en: 'Yara product sub family 1' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
        productFamilyId: null,
        status: EntityStatus.ACTIVE,
      },
      {
        name: { en: 'Yara product sub family 2' },
        description: { en: 'Test description' },
        imageUrls: [],
        productFamilyId: null,
        products: [],
        status: EntityStatus.ACTIVE,
      },
      {
        name: { en: 'Yara product sub family 3' },
        description: { en: 'Test description' },
        imageUrls: [],
        products: [],
        productFamilyId: null,
        status: EntityStatus.ACTIVE,
      },
    ];
    items.forEach((item) => {
      item.productFamilyId = sample(allFamilies)._id;
    });

    return this.subFamilyModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.subFamilyModel.deleteMany({});
  }
}