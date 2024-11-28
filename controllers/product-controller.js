const { sucess, fail } = require("../helpers/response");
const ProductModel = require("../models/product");
const validator = require("../validators/product-validator");
const pagValidator = require("../validators/pagination-validator");


exports.post = async (req, res, next) => {
  try {
    await validator.productSchema.validateAsync(req.query);
    let product = await ProductModel.create({
      pro_code: req.query.code,
      pro_description: req.query.description,
      pro_category: req.query.category,
      pro_price: req.query.price,
      pro_supplier: req.query.supplier,
      pro_barcode: req.query.barcode,
      pro_location: req.query.location,
      pro_contact: req.query.contact,
      pro_conditions: req.query.date
    });
    res.status(201).json(sucess(product));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let products = await ProductModel.read();
    if (!products) res.status(404).json(fail(products));
    else res.status(200).json(sucess(products));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    await validator.cpfSchema.validate(req.params.cpf)
    let product = await ProductModel.readByPk(req.params.cpf);
    if (!product) res.status(404).json(fail(product));
    else res.status(200).json(sucess(product));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    await pagValidator.paginationSchema.validateAsync(req.query)
    let products = await ProductModel.readPagination(
      req.query.limit,
      req.query.offset
    );
    if (!products) res.status(404).json(fail(products));
    else res.status(200).json(sucess(products));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    await validator.codeSchema.validateAsync(req.params);
    await validator.productSchema.validateAsync(req.query);
    let product = await ProductModel.update(req.query.code, {
      pro_code: req.query.code,
      pro_description: req.query.description,
      pro_category: req.query.category,
      pro_price: req.query.price,
      pro_supplier: req.query.supplier,
      pro_barcode: req.query.barcode,
      pro_location: req.query.location,
      pro_contact: req.query.contact,
      pro_conditions: req.query.date
    });
    if (!product) res.status(404).json(fail(product));
    else res.status(200).json(sucess(product));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    await validator.codeSchema.validateAsync(req.params)
    let product = await ProductModel.delete(req.params.code);
    if (!product) res.status(404).json(fail(product));
    else res.status(200).json(sucess(product));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};