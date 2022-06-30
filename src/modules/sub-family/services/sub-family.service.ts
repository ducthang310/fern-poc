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
    private subFamilyModel: Model<SubFamilyDocument>,
  ) {}

  create(createSubFamilyDto: CreateSubFamilyDto) {
    const createdSubFamily = new this.subFamilyModel(createSubFamilyDto);
    return createdSubFamily.save();
  }

  findAll() {
    return this.subFamilyModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} subFamily`;
  }

  update(id: number, updateSubFamilyDto: UpdateSubFamilyDto) {
    return `This action updates a #${id} subFamily`;
  }

  remove(id: number) {
    return `This action removes a #${id} subFamily`;
  }

  updateMany(data: { products: any[] }) {
    return this.subFamilyModel.updateMany({}, data).exec();
  }
}
