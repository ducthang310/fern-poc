import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionCrops1655897825689 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('crops');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('crops');
  }
}
