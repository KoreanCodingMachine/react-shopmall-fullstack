const express = require('express');
const { ProductModel } = require('./model/index');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!!!!');
});
app.get('/api/product', async function (req, res) {
  const productList = await ProductModel.find();
  res.json(productList);
});
app.post('/api/product', async function (req, res) {
  const { name, category, price } = req.body;
  console.log(req.body);
  const product = new ProductModel({ title: name, category, price });
  await product.save();
  res.send('success');
});

app.post('/api/account', async function (req, res) {
  console.log(req.body);
  res.send('success');
});

app.post('/api/login', async function (req, res) {
  console.log(req.body);
  res.send('success');
});

app.listen(4000);
