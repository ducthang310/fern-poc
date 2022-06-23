import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionAccounts1655891961729 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('accounts');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('accounts');
  }
}
