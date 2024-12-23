const Joi = require('joi');


exports.productSchema = Joi.object({
  code: Joi.string()
    .length(11)
    .required()
    .messages({
      'string.length': 'O código deve ter exatamente 11 caracteres.',
      'any.required': 'O código é obrigatório.',
    }),
  
  description: Joi.string()
    .required()
    .messages({
      'any.required': 'A descrição é obrigatória.',
    }),
  
  category: Joi.string()
    .valid('P', 'M', 'G')
    .required()
    .messages({
      'any.only': 'A categoria deve ser P, M ou G.',
      'any.required': 'A categoria é obrigatória.',
    }),
  
  price: Joi.number()
    .precision(2)
    .positive()
    .required()
    .messages({
      'number.base': 'O preço deve ser um número.',
      'number.positive': 'O preço deve ser positivo.',
      'any.required': 'O preço é obrigatório.',
    }),
  
  supplier: Joi.string()
    .min(1)
    .max(255)
    .required()
    .messages({
      'string.max': 'O fornecedor deve ter no máximo 255 caracteres.',
      'any.required': 'O fornecedor é obrigatório.',
    }),
  
  barcode: Joi.string()
    .min(1)
    .max(25)
    .required()
    .messages({
      'string.max': 'O código de barras deve ter no máximo 25 caracteres.',
      'any.required': 'O código de barras é obrigatório.',
    }),
  
  location: Joi.string()
    .min(5)
    .max(255)
    .required()
    .messages({
      'string.min': 'A localização deve ter no mínimo 5 caracteres.',
      'any.required': 'A localização é obrigatória.',
    }),
  
  contact: Joi.string()
    .required()
    .messages({
      'any.required': 'O contato é obrigatório.',
    }),
  
  conditions: Joi.string()
    .min(1)
    .max(255)
    .required()
    .messages({
      'string.max': 'As condições devem ter no máximo 255 caracteres.',
      'any.required': 'As condições são obrigatórias.',
    }),
});
