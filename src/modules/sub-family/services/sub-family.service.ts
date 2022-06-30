import { Injectable } from '@nestjs/common';
import { CreateSubFamilyDto } from '../dto/create-sub-family.dto';
import { UpdateSubFamilyDto } from '../dto/update-sub-family.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SubFamily,
  SubFamilyDocument,
} from '../schemas/sub-family.schema';

@Injectable()
export class SubFamilyService {
  constructor(
    @InjectModel(SubFamily.name)
    private productFamilyModel: Model<SubFamilyDocument>,
  ) {}

  create(createSubFamilyDto: CreateSubFamilyDto) {
    const createdSubFamily = new this.productFamilyModel(
      createSubFamilyDto,
    );
    return createdSubFamily.save();
  }

  findAll() {
    return this.productFamilyModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} productFamily`;
  }

  update(id: number, updateSubFamilyDto: UpdateSubFamilyDto) {
    return `This action updates a #${id} productFamily`;
  }

  remove(id: number) {
    return `This action removes a #${id} productFamily`;
  }
}
