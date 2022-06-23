import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductBrands1655897837776 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productBrands');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('productBrands');
  }
}
