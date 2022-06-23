import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductTypes1655897849214 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productTypes');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('productTypes');
  }
}
