const mongoose = require("mongoose");
const Models = require("../models/url");

var mongoDbconnection = async function () {
  var url =  process.env.MONGO_URL;
  console.log(url);
    await mongoose.connect(url);
};

module.exports = {
  mongoDbconnection: mongoDbconnection,
};
