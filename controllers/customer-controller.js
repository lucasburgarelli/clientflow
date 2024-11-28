const { sucess, fail } = require("../helpers/response");
const CustomerModel = require("../models/customer");
const validator = require("../validators/customer-validator");
const pagValidator = require("../validators/pagination-validator");


exports.post = async (req, res, next) => {
  try {
    await validator.customerSchema.validateAsync(req.query);
    let customer = await CustomerModel.create({
      cus_cnpj: req.query.cnpj,
      cus_name: req.query.name,
      cus_revenue: req.query.revenue,
      cus_size: req.query.size,
      cus_contact: req.query.contact
    });
    res.status(201).json(sucess(customer));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let customers = await CustomerModel.read();
    if (!customers) res.status(404).json(fail(customers));
    else res.status(200).json(sucess(customers));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    await validator.cnpjSchema.validateAsync(req.params.cnpj)
    let customer = await CustomerModel.readByPk(req.params.cnpj);
    if (!customer) res.status(404).json(fail(customer));
    else res.status(200).json(sucess(customer));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    await pagValidator.paginationSchema.validateAsync(req.query)
    let stocks = await CustomerModel.readPagination(
      req.query.limit,
      req.query.offset
    );
    if (!stocks) res.status(404).json(fail(stocks));
    else res.status(200).json(sucess(stocks));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    await validator.cnpjSchema.validateAsync(req.params)
    await validator.customerSchema.validateAsync(req.query)
    let customer = await CustomerModel.update(req.params.cnpj, {
      cus_cnpj: req.query.cnpj,
      cus_name: req.query.name,
      cus_revenue: req.query.revenue,
      cus_size: req.query.size,
      cus_contact: req.query.contact
    });
    if (!customer) res.status(404).json(fail(customer));
    else res.status(200).json(sucess(customer));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    await validator.cnpjSchema.validateAsync(req.params)
    let customer = await CustomerModel.delete(req.params.cnpj);
    if (!customer) res.status(404).json(fail(customer));
    else res.status(200).json(sucess(customer));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};