const express = require("express");
const path = require("path");
require("dotenv").config();

const installRoute = require("./routes/installer-route");

const analistRoute = require("./routes/analist-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");
const transactionRoute = require("./routes/transaction-route");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/install", installRoute);
app.use("/analist", analistRoute);
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/transaction", transactionRoute);

app.listen(process.env.API_PORT, () => {
  console.log("Listenning...");
});