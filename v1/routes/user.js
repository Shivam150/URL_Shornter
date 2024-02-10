const userRouter = require("express").Router();

const controllers = require("../controllers/user");
userRouter.post("/signUp",  controllers.SignUp);
module.exports = userRouter;