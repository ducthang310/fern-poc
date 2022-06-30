import { Injectable } from '@nestjs/common';
import { CreateProductBrandDto } from '../dto/create-product-brand.dto';
import { UpdateProductBrandDto } from '../dto/update-product-brand.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProductBrand, ProductBrandDocument } from '../schemas/product-brand.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductBrandService {
  constructor(
    @InjectModel(ProductBrand.name)
    private productBrandModel: Model<ProductBrandDocument>,
  ) {}

  create(createProductBrandDto: CreateProductBrandDto) {
    const createdProductFamily = new this.productBrandModel(
      createProductBrandDto,
    );
    return createdProductFamily.save();
  }

  findAll() {
    return this.productBrandModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} productBrand`;
  }

  update(id: number, updateProductBrandDto: UpdateProductBrandDto) {
    return `This action updates a #${id} productBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} productBrand`;
  }

  updateMany(data: { products: any[] }) {
    return this.productBrandModel.updateMany({}, data).exec();
  }
}
