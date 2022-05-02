const mongoose = require('mongoose');
const dbConnect = () => {
  mongoose.connect(
    'mongodb+srv://pon03078:kis405814!!@cluster0.eehrf.mongodb.net/shoppingMall?retryWrites=true&w=majority'
  );
};
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  title: String,
  price: Number,
  sort: Number,
  img: String,
});

dbConnect();

const ProductModel = mongoose.model('Product', Product);
module.exports = { ProductModel };
