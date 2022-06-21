export default interface EnvironmentVariables {
  APP_NAME: string;
  APP_TIMEZONE: string;
  PORT: number;
  JWT_EXPIRES_IN_SECONDS: number;
  JWT_SECRET_KEY: string;

  DATABASE_CONNECTION_STRING: string;
  DATABASE_NAME: string;
  DATABASE_LOGGING: string;
}
