import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProducts1656497658424 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('products');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('products');
  }
}
