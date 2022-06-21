import { Module } from '@nestjs/common';
import { ProductFamilyService } from './product-family.service';
import { ProductFamilyController } from './product-family.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductFamily, ProductFamilyFamilySchema } from './schemas/product-family.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProductFamily.name, schema: ProductFamilyFamilySchema }]),
  ],
  controllers: [ProductFamilyController],
  providers: [ProductFamilyService],
})
export class ProductFamilyModule {}
