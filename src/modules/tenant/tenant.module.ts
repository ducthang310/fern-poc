import { Module } from '@nestjs/common';
import { TenantService } from './services/tenant.service';
import { TenantController } from './controllers/tenant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenant, TenantSchema } from './schemas/tenant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tenant.name, schema: TenantSchema }]),
  ],
  controllers: [TenantController],
  providers: [TenantService],
  exports: [MongooseModule, TenantService],
})
export class TenantModule {}
