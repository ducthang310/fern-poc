import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductFamilies1655897842643 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productFamilies', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'productFamilies',
          required: ['name', 'createdAt', 'updatedAt'],
          properties: {
            name: {
              bsonType: 'string',
            },
            description: {
              bsonType: 'array',
              items: {
                title: 'localisedValue',
                required: ['en'],
                properties: {
                  en: {
                    bsonType: 'string',
                  },
                },
              },
            },
            mediaUrls: {
              bsonType: 'array',
              items: {
                bsonType: 'string',
              },
            },
            products: {
              bsonType: 'array',
              items: {
                bsonType: 'string',
              },
            },
            status: {
              bsonType: 'string',
            },
            createdAt: {
              bsonType: 'date',
            },
            updatedAt: {
              bsonType: 'date',
            },
          },
        },
      },
    });
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('productFamilies');
  }
}
