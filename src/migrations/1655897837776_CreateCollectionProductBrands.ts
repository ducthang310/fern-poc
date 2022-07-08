import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductBrands1655897837776 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productBrands', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'productBrands',
          required: ['name', 'createdAt', 'updatedAt'],
          properties: {
            name: {
              bsonType: 'string',
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
              bsonType: 'timestamp',
            },
            updatedAt: {
              bsonType: 'timestamp',
            },
          },
        },
      },
    });
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('productBrands');
  }
}
