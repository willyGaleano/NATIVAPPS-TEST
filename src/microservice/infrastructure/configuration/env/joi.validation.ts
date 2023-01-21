import * as Joi from 'joi';

export const JoiValidationEnv = Joi.object({
  PORT: Joi.required(),
  DB_HOST: Joi.required(),
  DB_PORT: Joi.required(),
  DB_NAME: Joi.required(),
  USER: Joi.required(),
  PASSWORD: Joi.required(),
});
