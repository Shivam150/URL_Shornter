const mongoose = require("mongoose");
const Models = require("../models/url");

var mongoDbconnection = async function () {
  var url = "mongodb://0.0.0.0:27017/url-shortner";
  console.log(url);
    await mongoose.connect(url);
};

module.exports = {
  mongoDbconnection: mongoDbconnection,
};
