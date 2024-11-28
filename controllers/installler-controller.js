const { sucess, fail } = require("../helpers/response");
const sequelize = require("../helpers/connection");

const AnalistModel = require("../models/analist");
const CustomerModel = require("../models/customer");
const ProductModel = require("../models/product");
const TransactionModel = require("../models/transaction");

exports.install = async (req, res, next) => {
  try {
    await sequelize.sync({force: false});
    await res.status(201).json(sucess("Install complete"));
  } catch (error) {
    await res.status(400).json(sucess("Install error"));
  }
};