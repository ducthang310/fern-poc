import { Injectable } from '@nestjs/common';
import { CreateProductFamilyDto } from './dto/create-product-family.dto';
import { UpdateProductFamilyDto } from './dto/update-product-family.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductFamily, ProductFamilyDocument } from './schemas/product-family.schema';

@Injectable()
export class ProductFamilyService {
  constructor(
    @InjectModel(ProductFamily.name)
    private productFamilyModel: Model<ProductFamilyDocument>,
  ) {}

  create(createProductFamilyDto: CreateProductFamilyDto) {
    const createdProductFamily = new this.productFamilyModel(
      createProductFamilyDto,
    );
    return createdProductFamily.save();
  }

  findAll() {
    return `This action returns all productFamily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productFamily`;
  }

  update(id: number, updateProductFamilyDto: UpdateProductFamilyDto) {
    return `This action updates a #${id} productFamily`;
  }

  remove(id: number) {
    return `This action removes a #${id} productFamily`;
  }
}
