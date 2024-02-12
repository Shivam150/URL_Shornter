const userRouter = require("express").Router();

const controllers = require("../controllers/user");

userRouter.post("/signUp",  controllers.SignUp);
userRouter.post("/login",   controllers.Login);
module.exports = userRouter;