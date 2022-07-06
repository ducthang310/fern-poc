import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('popular-products')
export class PopularProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll({ isMostPopular: true });
  }
}
