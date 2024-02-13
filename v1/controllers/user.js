const services =   require('../services/user');
const {v4: uuid} =  require("uuid");
const  {setUserToken} = require("../../utility/auth");


async function SignUp(req,res,next) {
    try {
        const user = await services.SignUp(req,res);
        // res.status(201).json({message: 'User created successfully', data : user});
        // if(!user){
        //     return res.render("signUp",{message:"Email already exists"});
        if(user){
            return res.render("home",{data:user.name}); 
        }
    } catch (error) {
        next(error);
    }
}


async function Login(req, res, next){
    try {
        let user = await services.Login(req);
        if(!user){
            console.log("Invalid User Before");
            return res.render( "login",{ error : "Invalid email or password!" });
        }
        const token = setUserToken(user);
        res.cookie( "userId" , token) ;
        return res.redirect("/home");
    } catch (error) {
        next(error);
    }
}



module.exports = {
    SignUp,
    Login,
}