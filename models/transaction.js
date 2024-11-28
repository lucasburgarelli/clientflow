const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");
const ProductModel = require("../models/product");

const TransactionModel = sequelize.define("Transaction", {
  tra_code: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [11, 11],
        msg: "code must have 11 characters",
      },
    },
  },
  tra_quantity: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  tra_type: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isIn: [["E", "S"]],
    },
  },
  tra_date: {
    type: DataTypes.DATEONLY,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  tra_time: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isTime: true,
    },
  }
});


module.exports = {
  create: async function (transaction) {
    const TransactionNew = await TransactionModel.create(transaction);
    return TransactionNew;
  },
  read: async function () {
    return TransactionModel.findAll();
  },
  readPagination: async function (limit, offset) {
    return await TransactionModel.findAndCountAll({
      offset: offset,
      limit: limit,
    });
  },
  delete: async function (transaction) {
    const TransactionDelete = await TransactionModel.destroy({
      where: {
        tra_code: transaction.code,
        tra_quantity: transaction.quantity,
        tra_type: transaction.type,
        tra_date: transaction.date,
        tra_time: transaction.time,
      },
    });
    return TransactionDelete;
  },
  readByPK: async function (transaction) {
    const Transaction = await TransactionModel.findOne({
      where: {
        tra_code: transaction.code,
        tra_quantity: transaction.quantity,
        tra_type: transaction.type,
        tra_date: transaction.date,
        tra_time: transaction.time,
      },
    });
    return Transaction;
  },
  TransactionModel,
};