const Joi = require('joi');

exports.transactionSchema = Joi.object({
    code: Joi.string()
      .length(11)
      .required()
      .messages({
        "string.length": "Code must have 11 characters.",
        "any.required": "Code is required.",
      }),
    
    quantity: Joi.number()
      .integer()
      .required()
      .messages({
        "number.base": "Quantity must be a number.",
        "any.required": "Quantity is required.",
      }),
    
    type: Joi.string()
      .valid("E", "S")
      .required()
      .messages({
        "any.only": "Type must be either 'E' or 'S'.",
        "any.required": "Type is required.",
      }),
    
    date: Joi.date()
      .iso()
      .required()
      .messages({
        "date.base": "Date must be a valid date.",
        "date.format": "Date must be in ISO format (YYYY-MM-DD).",
        "any.required": "Date is required.",
      }),
  
    time: Joi.string()
      .pattern(/^(?:[01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/)
      .required()
      .messages({
        "string.pattern.base": "Time must be in HH:MM or HH:MM:SS format.",
        "any.required": "Time is required.",
      }),
  });