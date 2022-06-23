import { Module } from '@nestjs/common';
import { ProductFamilyService } from './services/product-family.service';
import { ProductFamilyController } from './controllers/product-family.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductFamily, ProductFamilySchema } from './schemas/product-family.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductFamily.name, schema: ProductFamilySchema },
    ]),
  ],
  controllers: [ProductFamilyController],
  providers: [ProductFamilyService],
  exports: [ProductFamilyService, MongooseModule],
})
export class ProductFamilyModule {}
