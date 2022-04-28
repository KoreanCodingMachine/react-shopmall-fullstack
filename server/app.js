const express = require('express');
const { ProductModel } = require('./model/index');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!!');
});
app.get('/api/product', async function (req, res) {
  const productList = await ProductModel.find();
  res.json(productList);
});

app.listen(4000);
