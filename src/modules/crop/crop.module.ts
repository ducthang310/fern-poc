import { Module } from '@nestjs/common';
import { CropService } from './services/crop.service';
import { CropController } from './controllers/crop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crop, CropSchema } from './schemas/crop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crop.name, schema: CropSchema }]),
  ],
  controllers: [CropController],
  providers: [CropService],
})
export class CropModule {}
