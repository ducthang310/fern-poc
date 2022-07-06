import { Body, Controller, Post } from '@nestjs/common';
import { S3Service } from '../../../aws/services/s3/s3.service';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { RequestPresignedUrlDto } from '../../dto/request-presigned-url.dto';
import EnvironmentVariables from '../../../../common/interfaces/configuration';

@Controller('files')
export class FileController {
  constructor(
    private readonly s3Service: S3Service,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  @Post('presigned-urls')
  async requestAPresignedUrl(@Body() dto: RequestPresignedUrlDto): Promise<{ key: string, url: string }> {
    const key = dto.key ? dto.key : 'tmp/' + uuidv4();
    const url = await this.s3Service.generatePresignedUrl(
      this.configService.get('AWS_S3_BUCKET_CDN'),
      key,
    );
    return { key, url };
  }
}
