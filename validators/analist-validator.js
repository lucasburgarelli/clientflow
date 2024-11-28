const Joi = require('joi');

exports.analistSchema = Joi.object({
  cnpj: Joi.string()
    .length(11)
    .required()
    .messages({
      "string.base": "cnpj must be a string",
      "string.length": "cnpj must have exactly 11 characters",
      "any.required": "cnpj is required",
    }),

  name: Joi.string()
    .min(5)
    .max(255)
    .required()
    .messages({
      "string.base": "name must be a string",
      "string.min": "name must have at least 5 characters",
      "string.max": "name must have at most 255 characters",
      "any.required": "name is required",
    }),

  revenue: Joi.number()
    .positive()
    .required()
    .messages({
      "number.base": "revenue must be a number",
      "number.positive": "revenue must be a positive number",
      "any.required": "revenue is required",
    }),

  size: Joi.string()
    .valid("P", "M", "G")
    .required()
    .messages({
      "any.only": "size must be one of 'P', 'M', 'G'",
      "any.required": "size is required",
    }),

  contact: Joi.string()
    .min(1)
    .required()
    .messages({
      "string.base": "contact must be a string",
      "string.empty": "contact cannot be empty",
      "any.required": "contact is required",
    }),
});

exports.cnpjSchema = Joi.object({
  cnpj: Joi.string()
    .length(11)
    .required()
    .messages({
      "string.base": "cnpj must be a string",
      "string.length": "cnpj must have exactly 11 characters",
      "any.required": "cnpj is required",
    })
});