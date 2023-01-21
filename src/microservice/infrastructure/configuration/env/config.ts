export const EnvConfiguration = () => ({
  PORT: process.env.PORT,
  host: process.env.DB_HOST,
  portdb: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});
