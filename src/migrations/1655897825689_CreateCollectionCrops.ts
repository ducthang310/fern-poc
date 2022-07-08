import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionCrops1655897825689 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('crops', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'crops',
          required: ['name', 'createdAt', 'updatedAt'],
          properties: {
            name: {
              bsonType: 'string',
            },
            imageUrl: {
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
    await db.dropCollection('crops');
  }
}
