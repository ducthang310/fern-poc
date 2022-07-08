import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionTenants1656999684093 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('tenants', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'tenants',
          required: ['name'],
          properties: {
            name: {
              bsonType: 'string',
            },
          },
        },
      },
    });
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('tenants');
  }
}
