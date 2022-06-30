import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionSubFamilies1656502051223 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('subFamilies');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('subFamilies');
  }
}
