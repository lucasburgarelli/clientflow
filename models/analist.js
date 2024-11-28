const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

const AnalistModel = sequelize.define("Analist", {
  ana_cnpj: {
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
  ana_name: {
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
  ana_revenue: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
    },
  },
  ana_size: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      isIn: [["P", "M", "G"]],
    },
  },
  ana_contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
});

module.exports = {
  create: async function (Analist) {
    const AnalistNew = await AnalistModel.create(Analist);
    return AnalistNew;
  },
  read: async function () {
    return AnalistModel.findAll();
  },
  readPagination: async function (limit, offset) {
    return await AnalistModel.findAndCountAll({
      offset: offset,
      limit: limit,
    });
  },
  update: async function (cnpj, Analist) {
    const AnalistUpdate = await AnalistModel.update(Analist, {
      where: {
        ana_cnpj: cnpj,
      },
    });
    return AnalistUpdate;
  },
  delete: async function (cnpj) {
    const AnalistDelete = await AnalistModel.destroy({
      where: {
        ana_cnpj: cnpj,
      },
    });
    return AnalistDelete;
  },
  readByPK: async function (cnpj) {
    const Analist = await AnalistModel.findOne({
      where: {
        ana_cnpj: cnpj,
      },
    });
    return Analist;
  },
  AnalistModel,
};