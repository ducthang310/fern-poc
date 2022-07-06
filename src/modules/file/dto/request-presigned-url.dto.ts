import { ApiProperty } from '@nestjs/swagger';

export class RequestPresignedUrlDto {
  @ApiProperty({ example: 'sadv-qwee-ssddf...' })
  key?: string;
}
