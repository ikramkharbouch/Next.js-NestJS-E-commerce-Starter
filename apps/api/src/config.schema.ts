import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  JWT_SECRET: Joi.string().required(),
});
