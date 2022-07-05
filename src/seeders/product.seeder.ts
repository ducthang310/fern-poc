import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { Product } from '../modules/product/schemas/product.schema';
import { ProductBrandService } from '../modules/product-brand/services/product-brand.service';
import { ProductTypeService } from '../modules/product-type/services/product-type.service';
import { ProductFamilyService } from '../modules/product-family/services/product-family.service';
import { CropService } from '../modules/crop/services/crop.service';
import { ProductService } from '../modules/product/services/product.service';
import { TenantService } from '../modules/tenant/services/tenant.service';
import { sample } from 'lodash';

@Injectable()
export class ProductsSeeder implements Seeder {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    private readonly productBrandService: ProductBrandService,
    private readonly productTypeService: ProductTypeService,
    private readonly productFamilyService: ProductFamilyService,
    private readonly cropService: CropService,
    private readonly tenantService: TenantService,
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
      name: item.name,
    }));

    const allCrops = await this.cropService.findAll();
    const crops = allCrops.map((item) => ({
      id: item._id,
      name: item.name,
    }));

    const allTenants = await this.tenantService.findAll();
    const tenants = allTenants.map((item) => ({
      id: item._id,
      name: item.name,
    }));

    const items = DataFactory.createForClass(Product)
      .generate(5)
      .map((item, index) => ({
        ...item,
        productTenant: sample(tenants),
        name: {
          en: `Yara Product ${index + 1} - name in English`,
          te: `Yara Product ${index + 1} - name in Telugu`,
        },
        productBrands: brands,
        productTypes: types,
        productFamilies: families,
        crops: crops,
        auditTrail: {
          createdBy: 'Yara administrator',
          createdAt: new Date().toISOString(),
          updatedBy: 'Yara administrator',
          updatedAt: new Date().toISOString(),
        },
      }));

    await this.productModel.insertMany(items);
    const allProducts = await this.productService.findAll();
    const productIds = allProducts.map((item) => item._id);
    await this.productBrandService.updateMany({ products: productIds });
    await this.productTypeService.updateMany({ products: productIds });
    await this.productFamilyService.updateMany({ products: productIds });
    await this.cropService.updateMany({ products: productIds });
    return true;
  }

  async drop(): Promise<any> {
    return this.productModel.deleteMany({});
  }
}