import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { Product } from '../modules/product/schemas/product.schema';
import { ProductBrandService } from '../modules/product-brand/services/product-brand.service';
import { ProductTypeService } from '../modules/product-type/services/product-type.service';
import { ProductFamilyService } from '../modules/product-family/services/product-family.service';
import { CropService } from '../modules/crop/services/crop.service';
import { SubFamilyService } from '../modules/sub-family/services/sub-family.service';
import { ProductService } from '../modules/product/services/product.service';

@Injectable()
export class ProductsSeeder implements Seeder {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    private readonly productBrandService: ProductBrandService,
    private readonly productTypeService: ProductTypeService,
    private readonly productFamilyService: ProductFamilyService,
    private readonly subFamilyService: SubFamilyService,
    private readonly cropService: CropService,
    private readonly productService: ProductService,
  ) {}

  async seed(): Promise<any> {
    const allBrands = await this.productBrandService.findAll();
    const brands = allBrands.map((item) => ({
      id: item._id,
      name: item.name,
    }));

    const allTypes = await this.productTypeService.findAll();
    const types = allTypes.map((item) => ({
      id: item._id,
      name: item.name,
    }));

    const allFamilies = await this.productFamilyService.findAll();
    const families = allFamilies.map((item) => ({
      id: item._id,
      name: item.name.en,
    }));

    const allSubFamilies = await this.subFamilyService.findAll();
    const subFamilies = allSubFamilies.map((item) => ({
      id: item._id,
      name: item.name.en,
    }));

    const allCrops = await this.cropService.findAll();
    const crops = allCrops.map((item) => ({
      id: item._id,
      name: item.name.en,
    }));

    const items = DataFactory.createForClass(Product)
      .generate(5)
      .map((item) => ({
        ...item,
        productBrands: brands,
        productTypes: types,
        productFamilies: families,
        subFamilies: subFamilies,
        crops: crops,
      }));

    await this.productModel.insertMany(items);
    const allProducts = await this.productService.findAll();
    const productIds = allProducts.map((item) => item._id);
    await this.productBrandService.updateMany({ products: productIds });
    await this.productTypeService.updateMany({ products: productIds });
    await this.productFamilyService.updateMany({ products: productIds });
    await this.subFamilyService.updateMany({ products: productIds });
    await this.cropService.updateMany({ products: productIds });
    return true;
  }

  async drop(): Promise<any> {
    return this.productModel.deleteMany({});
  }
}