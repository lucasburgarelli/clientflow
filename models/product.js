const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

const ProductModel = sequelize.define("Product", {
  pro_code: {
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
  pro_description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  pro_category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      isIn: [["P", "M", "G"]],
    },
  },
  pro_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
    },
  },
  pro_supplier: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [1, 255],
        msg: "",
      },
    },
  },
  pro_barcode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [1, 25],
        msg: "",
      },
    },
  },
  pro_location: {
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
  pro_contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  pro_conditions: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [1, 255],
        msg: "",
      },
    },
  },
});

module.exports = {
  create: async function (Product) {
    const ProductNew = await ProductModel.create(Product);
    return ProductNew;
  },
  read: async function () {
    return ProductModel.findAll();
  },
  readPagination: async function (limit, offset) {
    return await ProductModel.findAndCountAll({
      offset: offset,
      limit: limit,
    });
  },
  update: async function (code, Product) {
    const ProductUpdate = await ProductModel.update(Product, {
      where: {
        pro_code: code,
      },
    });
    return ProductUpdate;
  },
  delete: async function (code) {
    const ProductDelete = await ProductModel.destroy({
      where: {
        pro_code: code,
      },
    });
    return ProductDelete;
  },
  readByPK: async function (code) {
    const Product = await ProductModel.findOne({
      where: {
        pro_code: code,
      },
    });
    return Product;
  },
  ProductModel
};