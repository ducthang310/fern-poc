import { Module } from '@nestjs/common';
import { ProductTypeService } from './services/product-type.service';
import { ProductTypeController } from './controllers/product-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductType, ProductTypeSchema } from './schemas/product-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductType.name, schema: ProductTypeSchema },
    ]),
  ],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
  exports: [MongooseModule, ProductTypeService],
})
export class ProductTypeModule {}
