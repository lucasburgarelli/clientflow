const { sucess, fail } = require("../helpers/response");
const AnalistModel = require("../models/analist");
const validator = require("../validators/analist-validator");
const pagValidator = require("../validators/pagination-validator");


exports.post = async (req, res, next) => {
  try {
    await validator.analistSchema.validateAsync(req.query);
    let analist = await AnalistModel.create({
      ana_cnpj: req.query.cpnj,
      ana_name: req.query.name,
      ana_revenue: req.query.revenue,
      ana_size: req.query.size,
      ana_contact: req.query.contact
    });
    res.status(201).json(sucess(analist));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let analists = await AnalistModel.read();
    if (!analists) res.status(404).json(fail(analists));
    else res.status(200).json(sucess(analists));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCnpj = async (req, res, next) => {
  try {
    await validator.cnpjSchema.validateAsync(req.params.cnpj);
    let analist = await AnalistModel.readByPk(req.params.cnpj);
    if (!analist) res.status(404).json(fail(analist));
    else res.status(200).json(sucess(analist));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    await pagValidator.paginationSchema.validateAsync(req.query);
    let analists = await AnalistModel.readPagination(
      req.query.limit,
      req.query.offset
    );
    if (!analists) res.status(404).json(fail(analists));
    else res.status(200).json(sucess(analists));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    await validator.cnpjSchema.validateAsync(req.params);
    await validator.analistSchema.validateAsync(req.query);
    let analist = await AnalistModel.update(req.params.cpnj, {
      ana_cnpj: req.query.cpnj,
      ana_name: req.query.name,
      ana_revenue: req.query.revenue,
      ana_size: req.query.size,
      ana_contact: req.query.contact
    });
    if (!analist) res.status(404).json(fail(analist));
    else res.status(200).json(sucess(analist));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    await validator.cnpjSchema.validateAsync(req.params);
    let analist = await AnalistModel.delete(req.params.cnpj);
    if (!analist) res.status(404).json(fail(analist));
    else res.status(200).json(sucess(analist));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};