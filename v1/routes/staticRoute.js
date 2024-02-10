const urlRouter = require("express").Router();

const controllers = require(".././controllers/url");

urlRouter.get("/Ui", controllers.EjsTestApi); // for testing ejs rendering

urlRouter.get("/signUp" , (req,res) => {
    return res.render("signUp");
})

module.exports = urlRouter;