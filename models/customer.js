const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

const CustomerModel = sequelize.define("Customer", {
  cus_cnpj: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [11, 11],
        msg: "cnpj must have 11 characters",
      },
    },
  },
  cus_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [5, 255],
        msg: "",
      },
    },
  },
  cus_revenue: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
    },
  },
  cus_size: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      isIn: [["P", "M", "G"]],
    },
  },
  cus_contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
});

module.exports = {
  create: async function (Customer) {
    const CustomerNew = await CustomerModel.create(Customer);
    return CustomerNew;
  },
  read: async function () {
    return CustomerModel.findAll();
  },
  readPagination: async function (limit, offset) {
    return await CustomerModel.findAndCountAll({
      offset: offset,
      limit: limit,
    });
  },
  update: async function (cnpj, Customer) {
    const CustomerUpdate = await CustomerModel.update(Customer, {
      where: {
        cus_cnpj: cnpj,
      },
    });
    return CustomerUpdate;
  },
  delete: async function (cnpj) {
    const CustomerDelete = await CustomerModel.destroy({
      where: {
        cus_cnpj: cnpj,
      },
    });
    return CustomerDelete;
  },
  readByPK: async function (cnpj) {
    const Customer = await CustomerModel.findOne({
      where: {
        cus_cnpj: cnpj,
      },
    });
    return Customer;
  },
  CustomerModel,
};