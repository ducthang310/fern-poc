import { ApiProperty } from '@nestjs/swagger';
import { LocalisedValue } from '../../../common/interfaces/common.interface';
import { Product } from '../../product/schemas/product.schema';

export class CreateProductTypeDto {
  @ApiProperty({ example: { en: 'New name' } })
  name: LocalisedValue;

  @ApiProperty({ example: { en: 'New description' } })
  description: LocalisedValue;

  @ApiProperty({ example: ['https://cdn.google.com/image.jpg'] })
  imageUrls: string[];

  @ApiProperty({ example: [{ name: { en: 'Product name' } }] })
  products: Product[];
}
