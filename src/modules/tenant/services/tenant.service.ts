import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from '../dto/create-tenant.dto';
import { UpdateTenantDto } from '../dto/update-tenant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant, TenantDocument } from '../schemas/tenant.schema';
import { Model } from 'mongoose';

@Injectable()
export class TenantService {
  constructor(
    @InjectModel(Tenant.name)
    private tenantModel: Model<TenantDocument>,
  ) {}

  create(createTenantDto: CreateTenantDto) {
    const createdProductFamily = new this.tenantModel(createTenantDto);
    return createdProductFamily.save();
  }

  findAll() {
    return this.tenantModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }

  updateMany(data: { products: any[] }) {
    return this.tenantModel.updateMany({}, data).exec();
  }
}
