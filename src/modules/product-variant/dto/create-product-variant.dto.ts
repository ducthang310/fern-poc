import { ApiProperty } from '@nestjs/swagger';
import { LanguageObject } from '../../../common/interfaces/common.interface';
import { Product } from '../../product/schemas/product.schema';

export class CreateProductVariantDto {
  @ApiProperty({ example: { default: 'New name' } })
  name: LanguageObject;

  @ApiProperty({ example: { default: 'New description' } })
  description: LanguageObject;

  @ApiProperty({ example: ['https://cdn.google.com/image.jpg'] })
  imageUrls: string[];

  @ApiProperty({ example: [{ name: { default: 'Product name' } }] })
  products: Product[];
}
