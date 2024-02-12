const urlRouter = require("express").Router();
const { model } = require("mongoose");
// const services = require("../services");
const controllers = require(".././controllers/url");
const middleware = require("../../middlewares/auth");

urlRouter.post("/url", middleware.restrictToLoggedInUserOnly, controllers.handleShortUrl);
urlRouter.get("/:_shortId", controllers.getShortedUrl);
urlRouter.get("/analytics/:_shortId", controllers.getTotalClicks);
module.exports = urlRouter;
 