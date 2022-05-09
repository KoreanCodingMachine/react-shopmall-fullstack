const mongoose = require('mongoose');
const config = require('../config/key');
const dbConnect = () => {
  mongoose.connect(config.mongoURI);
};
// const ObjectId = Schema.ObjectId;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    tpye: String,
  },
  password: {
    type: String,
    maxlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    tpye: String,
  },
  tokenExp: {
    type: Number,
  },
});

dbConnect();
const User = mongoose.model('User', userSchema);

module.exports = { User };
