export const EnvConfiguration = () => ({
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
});
