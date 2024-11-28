const Joi = require('joi');


exports.productSchema = Joi.object({
  code: Joi.string()
    .length(11)
    .required()
    .messages({
      "string.base": "code must be a string",
      "string.length": "code must have exactly 11 characters",
      "any.required": "code is required",
    }),

  description: Joi.string()
    .min(1)
    .required()
    .messages({
      "string.base": "description must be a string",
      "string.empty": "description cannot be empty",
      "any.required": "description is required",
    }),

  category: Joi.string()
    .valid("P", "M", "G")
    .required()
    .messages({
      "any.only": "category must be one of 'P', 'M', 'G'",
      "any.required": "category is required",
    }),

  price: Joi.number()
    .positive()
    .required()
    .messages({
      "number.base": "price must be a number",
      "number.positive": "price must be a positive number",
      "any.required": "price is required",
    }),

  supplier: Joi.string()
    .min(5)
    .max(255)
    .required()
    .messages({
      "string.base": "supplier must be a string",
      "string.min": "supplier must have at least 5 characters",
      "string.max": "supplier must have at most 255 characters",
      "any.required": "supplier is required",
    }),

  barcode: Joi.string()
    .min(5)
    .max(25)
    .required()
    .messages({
      "string.base": "barcode must be a string",
      "string.min": "barcode must have at least 5 characters",
      "string.max": "barcode must have at most 25 characters",
      "any.required": "barcode is required",
    }),

  quantity: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      "number.base": "quantity must be a number",
      "number.integer": "quantity must be an integer",
      "number.min": "quantity cannot be negative",
      "any.required": "quantity is required",
    }),

  location: Joi.string()
    .min(5)
    .max(255)
    .required()
    .messages({
      "string.base": "location must be a string",
      "string.min": "location must have at least 5 characters",
      "string.max": "location must have at most 255 characters",
      "any.required": "location is required",
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

  date: Joi.date()
    .iso()
    .required()
    .messages({
      "date.base": "date must be a valid date",
      "date.format": "date must be in ISO format (YYYY-MM-DD)",
      "any.required": "date is required",
    }),
});

exports.codeSchema = Joi.object({
  code: Joi.string()
    .length(11)
    .required()
    .messages({
      "string.base": "code must be a string",
      "string.length": "code must have exactly 11 characters",
      "any.required": "code is required",
    })
});