import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { Product } from '../modules/product/schemas/product.schema';
import { ProductBrandService } from '../modules/product-brand/services/product-brand.service';
import { ProductTypeService } from '../modules/product-type/services/product-type.service';
import { ProductVariantService } from '../modules/product-variant/services/product-variant.service';
import { ProductFamilyService } from '../modules/product-family/services/product-family.service';
import { CropService } from '../modules/crop/services/crop.service';

@Injectable()
export class ProductsSeeder implements Seeder {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    private readonly productBrandService: ProductBrandService,
    private readonly productTypeService: ProductTypeService,
    private readonly productVariantService: ProductVariantService,
    private readonly productFamilyService: ProductFamilyService,
    private readonly cropService: CropService,
  ) {}

  async seed(): Promise<any> {
    const brands = this.productBrandService.findAll();
    const types = this.productTypeService.findAll();
    const variants = this.productVariantService.findAll();
    const families = this.productFamilyService.findAll();
    const crops = this.cropService.findAll();

    const items = DataFactory.createForClass(Product).generate(5, {
      productBrands: brands,
      productTypes: types,
      productVariants: variants,
      productFamilies: families,
      crops,
    });

    return this.productModel.insertMany(items);
  }

  async drop(): Promise<any> {
    return this.productModel.deleteMany({});
  }
}