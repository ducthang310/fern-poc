import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductType,
  ProductTypeDocument,
} from '../schemas/product-type.schema';
import { CreateProductTypeDto } from '../dto/create-product-type.dto';
import { UpdateProductTypeDto } from '../dto/update-product-type.dto';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectModel(ProductType.name)
    private productTypeModel: Model<ProductTypeDocument>,
  ) {}

  create(createProductTypeDto: CreateProductTypeDto) {
    const createdProductType = new this.productTypeModel(createProductTypeDto);
    return createdProductType.save();
  }

  findAll() {
    return this.productTypeModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} productType`;
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return `This action updates a #${id} productType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productType`;
  }
}
