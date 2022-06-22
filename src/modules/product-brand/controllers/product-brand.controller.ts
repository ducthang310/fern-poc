import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductBrandService } from '../services/product-brand.service';
import { CreateProductBrandDto } from '../dto/create-product-brand.dto';
import { UpdateProductBrandDto } from '../dto/update-product-brand.dto';

@Controller('product-brands')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}

  @Post()
  create(@Body() createProductBrandDto: CreateProductBrandDto) {
    return this.productBrandService.create(createProductBrandDto);
  }

  @Get()
  findAll() {
    return this.productBrandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productBrandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductBrandDto: UpdateProductBrandDto) {
    return this.productBrandService.update(+id, updateProductBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productBrandService.remove(+id);
  }
}
