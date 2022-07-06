import { Module } from '@nestjs/common';
import { AwsModule } from '../aws/aws.module';
import { FileController } from './controllers/file/file.controller';

@Module({
  imports: [AwsModule],
  providers: [],
  exports: [],
  controllers: [FileController],
})
export class FileModule {}
