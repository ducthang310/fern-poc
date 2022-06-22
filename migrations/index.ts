import 'dotenv/config';
import { mongoMigrateCli } from 'mongo-migrate-ts';

mongoMigrateCli({
  uri: process.env.DATABASE_CONNECTION_STRING,
  database: process.env.DATABASE_NAME,
  migrationsDir: 'migrations',
  migrationsCollection: 'migrationsChangelog',
});
