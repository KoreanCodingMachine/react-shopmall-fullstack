const mongoose = require('mongoose');
const config = require('../config/key');
const dbConnect = () => {
  mongoose.connect(config.mongoURI);
};
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  title: String,
  price: Number,
  sort: Number,
  img: String,
  category: Number,
});

dbConnect();

const ProductModel = mongoose.model('Product', Product);
module.exports = { ProductModel };
