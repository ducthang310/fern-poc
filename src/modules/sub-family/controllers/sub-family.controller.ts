import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubFamilyService } from '../services/sub-family.service';
import { CreateSubFamilyDto } from '../dto/create-sub-family.dto';
import { UpdateSubFamilyDto } from '../dto/update-sub-family.dto';

@Controller('product-families')
export class SubFamilyController {
  constructor(private readonly productFamilyService: SubFamilyService) {}

  @Post()
  create(@Body() createSubFamilyDto: CreateSubFamilyDto) {
    return this.productFamilyService.create(createSubFamilyDto);
  }

  @Get()
  findAll() {
    return this.productFamilyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productFamilyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubFamilyDto: UpdateSubFamilyDto) {
    return this.productFamilyService.update(+id, updateSubFamilyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productFamilyService.remove(+id);
  }
}
