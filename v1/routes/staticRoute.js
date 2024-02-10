const urlRouter = require("express").Router();
const { model } = require("mongoose");
// const services = require("../services");
const controllers = require(".././controllers/url");

urlRouter.get("/Ui", controllers.EjsTestApi); // for testing ejs rendering
module.exports = urlRouter;