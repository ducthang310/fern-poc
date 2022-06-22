import { Module } from '@nestjs/common';
import { ProductVariantService } from './services/product-variant.service';
import { ProductVariantController } from './controllers/product-variant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductVariant, ProductVariantSchema } from './schemas/product-variant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductVariant.name, schema: ProductVariantSchema },
    ]),
  ],
  controllers: [ProductVariantController],
  providers: [ProductVariantService],
})
export class ProductVariantModule {}
