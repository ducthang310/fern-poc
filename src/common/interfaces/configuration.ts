export default interface EnvironmentVariables {
  APP_NAME: string;
  APP_TIMEZONE: string;
  PORT: number;
  JWT_EXPIRES_IN_SECONDS: number;
  JWT_SECRET_KEY: string;

  DATABASE_CONNECTION_STRING: string;
  DATABASE_NAME: string;
  DATABASE_LOGGING: string;

  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_S3_BUCKET_CDN: string;
  APP_CDN_URL: string;
  AWS_REGION: string;

  AWS_SES_MAIL_FROM_ADDRESS: string;
  AWS_SES_MAIL_FROM_NAME: string;
}
