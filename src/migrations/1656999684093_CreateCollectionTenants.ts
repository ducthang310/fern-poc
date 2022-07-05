import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionTenants1656999684093 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('tenants');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('tenants');
  }
}
