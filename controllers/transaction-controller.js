const { sucess, fail } = require("../helpers/response");
const TransactionModel = require("../models/transaction");
const validator = require("../validators/transaction-validator");
const pagValidator = require("../validators/pagination-validator");


exports.post = async (req, res, next) => {
  try {
    await validator.transactionSchema.validateAsync(req.query);
    let transaction = await TransactionModel.create({
      tra_code: req.query.code,
      tra_quantity: req.query.quantity,
      tra_type: req.query.type,
      tra_date: req.query.date
    });
    res.status(201).json(sucess(transaction));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let transactions = await TransactionModel.read();
    if (!transactions) res.status(404).json(fail(transactions));
    else res.status(200).json(sucess(transactions));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    await pagValidator.paginationSchema.validateAsync(req.query);
    let transactions = await TransactionModel.readPagination(
      req.query.limit,
      req.query.offset
    );
    if (!transactions) res.status(404).json(fail(transactions));
    else res.status(200).json(sucess(transactions));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    await validator.transactionSchema.validateAsync(req.params);
    let transaction = await TransactionModel.delete(req.query);
    if (!transaction) res.status(404).json(fail(transaction));
    else res.status(200).json(sucess(transaction));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};