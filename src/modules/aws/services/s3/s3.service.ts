import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  CopyObjectCommand,
  DeleteObjectCommand, PutObjectCommandOutput,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';
import EnvironmentVariables from '../../../../common/interfaces/configuration';
import { Buffer } from 'buffer';

@Injectable()
export class S3Service {
  s3Client: S3Client;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {
    this.s3Client = new S3Client({});
  }

  async generatePresignedUrl(bucketName: string, key: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    return getSignedUrl(this.s3Client, command, { expiresIn: 300 });
  }

  async moveFile(currentPath: string, newPath: string): Promise<boolean> {
    const bucketName = this.configService.get('AWS_S3_BUCKET_CDN');
    const command = new CopyObjectCommand({
      Bucket: bucketName,
      Key: newPath,
      CopySource: `${bucketName}/${currentPath}`,
    });
    await this.s3Client.send(command);

    // Delete the old object
    const deleteCommand = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: currentPath,
    });
    await this.s3Client.send(deleteCommand);
    return true;
  }

  async uploadBase64dataToBucket(
    key: string,
    content: string,
  ): Promise<PutObjectCommandOutput> {
    const bucketName = this.configService.get('AWS_S3_BUCKET_CDN');
    const imageType = content.substring(
      'data:'.length,
      content.indexOf(';base64'),
    );
    const base64Data = Buffer.from(
      content.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: base64Data,
      ContentEncoding: 'base64',
      ContentType: imageType,
    });
    return await this.s3Client.send(command);
  }
}
