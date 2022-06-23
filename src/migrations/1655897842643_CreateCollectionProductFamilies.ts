import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductFamilies1655897842643 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productFamilies');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('productFamilies');
  }
}
