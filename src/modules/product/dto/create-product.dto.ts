import { CreateProductFamilyDto } from '../../product-family/dto/create-product-family.dto';

export class CreateProductDto {
  name: string;
  description: string;
  shortDescription: string;
  productFamilies: CreateProductFamilyDto[];
}
