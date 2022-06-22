import { CreateProductFamilyDto } from '../../product-family/dto/create-product-family.dto';
import { LanguageObject } from '../../../common/interfaces/common.interface';

export class CreateProductDto {
  name: LanguageObject;
  description: string;
  shortDescription: string;
  productFamilies: CreateProductFamilyDto[];
}
