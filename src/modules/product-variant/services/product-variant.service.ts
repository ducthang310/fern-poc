import { Injectable } from '@nestjs/common';
import { CreateProductVariantDto } from '../dto/create-product-variant.dto';
import { UpdateProductVariantDto } from '../dto/update-product-variant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProductVariant, ProductVariantDocument } from '../schemas/product-variant.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectModel(ProductVariant.name)
    private productVariantModel: Model<ProductVariantDocument>,
  ) {}

  create(createProductVariantDto: CreateProductVariantDto) {
    const createdProductVariant = new this.productVariantModel(
      createProductVariantDto,
    );
    return createdProductVariant.save();
  }

  findAll() {
    return this.productVariantModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} productVariant`;
  }

  update(id: number, updateProductVariantDto: UpdateProductVariantDto) {
    return `This action updates a #${id} productVariant`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVariant`;
  }
}
