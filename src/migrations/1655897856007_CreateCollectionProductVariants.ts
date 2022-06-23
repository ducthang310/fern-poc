import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProductVariants1655897856007 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('productVariants');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('productVariants');
  }
}
