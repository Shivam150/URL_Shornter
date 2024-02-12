const urlRouter = require("express").Router();

const controllers = require(".././controllers/url");

urlRouter.get("/home", controllers.EjsTestApi); // for testing ejs rendering

urlRouter.get("/signUp" , (req,res) => {
    return res.render("signUp");
});

urlRouter.get("/login", (req,res) => {
    return res.render("login");
} );

module.exports = urlRouter;