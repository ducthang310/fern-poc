import { Module } from '@nestjs/common';
import { ProductBrandService } from './services/product-brand.service';
import { ProductBrandController } from './controllers/product-brand.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductBrand, ProductBrandSchema } from './schemas/product-brand.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductBrand.name, schema: ProductBrandSchema },
    ]),
  ],
  controllers: [ProductBrandController],
  providers: [ProductBrandService],
  exports: [MongooseModule, ProductBrandService],
})
export class ProductBrandModule {}
