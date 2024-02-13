const mongoose = require("mongoose");
const userModel = require("../../models/user");

async function SignUp(req,res){
    const data = req.body;
    let user = await userModel.findOne({email: data.email , isDeleted: false});
    if(!user){
        
        user = await userModel.create(data);
    }
    else{
        // throw  new Error('User already exists');
        return res.render("home",{error:"SignUp Failds!-Email already exists"});
    }


    return user;
}

async function Login(req) {
    const data = req.body;
    let user =  await userModel.findOne({ email : data.email , password : data.password ,isDeleted :false });
    return user;
}

module.exports = {
    SignUp,
    Login,
}