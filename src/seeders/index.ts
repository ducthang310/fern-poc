import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import EnvironmentVariables from '../common/interfaces/configuration';
import { ProductBrandsSeeder } from './product-brand.seeder';
import { ProductFamiliesSeeder } from './product-family.seeder';
import { ProductTypesSeeder } from './product-type.seeder';
import { CropsSeeder } from './crop.seeder';
import { ProductsSeeder } from './product.seeder';
import { ProductModule } from '../modules/product/product.module';
import { ProductFamilyModule } from '../modules/product-family/product-family.module';
import { ProductTypeModule } from '../modules/product-type/product-type.module';
import { ProductBrandModule } from '../modules/product-brand/product-brand.module';
import { CropModule } from '../modules/crop/crop.module';
import { TenantsSeeder } from './tenant.seeder';
import { TenantModule } from '../modules/tenant/tenant.module';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => {
        const connectionString = configService.get(
          'DATABASE_CONNECTION_STRING',
        );
        const database = configService.get('DATABASE_NAME');

        return {
          uri: connectionString,
          dbName: database,
          autoCreate: false,
        };
      },
      inject: [ConfigService],
    }),
    // MongooseModule.forFeature([
    //   { name: ProductBrand.name, schema: ProductBrandSchema },
    // ]),
    ProductModule,
    ProductFamilyModule,
    ProductTypeModule,
    ProductBrandModule,
    CropModule,
    TenantModule,
  ],
}).run([
  ProductBrandsSeeder,
  // ProductFamiliesSeeder,
  // ProductTypesSeeder,
  // CropsSeeder,
  // TenantsSeeder,
  // ProductsSeeder,
]);
