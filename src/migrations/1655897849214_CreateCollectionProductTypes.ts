import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductTypes1655897849214 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productTypes', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'productTypes',
          required: ['name', 'createdAt', 'updatedAt'],
          properties: {
            name: {
              bsonType: 'string',
            },
            imageUrl: {
              bsonType: 'string',
            },
            description: {
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
    await db.dropCollection('productTypes');
  }
}
