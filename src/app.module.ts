import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/filters/all-exception.filter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './modules/account/account.module';
import { ProductFamilyModule } from './modules/product-family/product-family.module';
import { LanguageModule } from './modules/language/language.module';
import { ProductModule } from './modules/product/product.module';
import { ProductTypeModule } from './modules/product-type/product-type.module';
import { ProductBrandModule } from './modules/product-brand/product-brand.module';
import { ProductVariantModule } from './modules/product-variant/product-variant.module';
import { CropModule } from './modules/crop/crop.module';
import EnvironmentVariables from './common/interfaces/configuration';
import { FileModule } from './modules/file/file.module';
import { TenantModule } from './modules/tenant/tenant.module';

@Module({
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
    AccountModule,
    ProductModule,
    LanguageModule,
    ProductFamilyModule,
    ProductTypeModule,
    ProductBrandModule,
    ProductVariantModule,
    CropModule,
    TenantModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
})
export class AppModule {}
