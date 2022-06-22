import { Injectable } from '@nestjs/common';
import { CreateCropDto } from '../dto/create-crop.dto';
import { UpdateCropDto } from '../dto/update-crop.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Crop, CropDocument } from '../schemas/crop.schema';
import { Model } from 'mongoose';

@Injectable()
export class CropService {
  constructor(
    @InjectModel(Crop.name)
    private cropModel: Model<CropDocument>,
  ) {}

  create(createCropDto: CreateCropDto) {
    const createdProductFamily = new this.cropModel(createCropDto);
    return createdProductFamily.save();
  }

  findAll() {
    return this.cropModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} crop`;
  }

  update(id: number, updateCropDto: UpdateCropDto) {
    return `This action updates a #${id} crop`;
  }

  remove(id: number) {
    return `This action removes a #${id} crop`;
  }
}
