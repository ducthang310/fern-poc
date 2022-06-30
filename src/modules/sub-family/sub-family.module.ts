import { Module } from '@nestjs/common';
import { SubFamilyService } from './services/sub-family.service';
import { SubFamilyController } from './controllers/sub-family.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubFamily, SubFamilySchema } from './schemas/sub-family.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubFamily.name, schema: SubFamilySchema },
    ]),
  ],
  controllers: [SubFamilyController],
  providers: [SubFamilyService],
  exports: [SubFamilyService, MongooseModule],
})
export class SubFamilyModule {}
