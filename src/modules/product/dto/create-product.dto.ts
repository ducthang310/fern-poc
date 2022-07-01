import { CreateProductFamilyDto } from '../../product-family/dto/create-product-family.dto';
import { LocalisedValue } from '../../../common/interfaces/common.interface';

export class CreateProductDto {
  name: LocalisedValue;
  description: string;
  shortDescription: string;
  productFamilies: CreateProductFamilyDto[];
}
