const urlRouter = require("express").Router();

const controllers = require(".././controllers/url");
const  middleware = require("../../middlewares/auth");

urlRouter.get("/home",middleware.restrictToLoggedInUserOnly, controllers.EjsTestApi); // for testing ejs rendering

urlRouter.get("/signUp" , (req,res) => {
    return res.render("signUp");
});

urlRouter.get("/login", (req,res) => {
    return res.render("login");
} );

module.exports = urlRouter;