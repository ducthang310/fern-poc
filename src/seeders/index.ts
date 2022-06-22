import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import EnvironmentVariables from '../common/interfaces/configuration';
import {
  ProductBrand,
  ProductBrandSchema,
} from '../modules/product-brand/schemas/product-brand.schema';
import { ProductBrandsSeeder } from './product-brand.seeder';

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
    MongooseModule.forFeature([
      { name: ProductBrand.name, schema: ProductBrandSchema },
    ]),
  ],
}).run([ProductBrandsSeeder]);
