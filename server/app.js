const express = require('express');
const { ProductModel } = require('./model/index');
const { User } = require('./model/User');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

//application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application / json
app.use(bodyParser.json());

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

app.post('/api/register', async function (req, res) {
  //회원가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);
  await user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
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
