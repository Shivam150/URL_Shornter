const mongoose = require("mongoose");
const userModel = require("../../models/user");

async function SignUp(req){
    const data = req.body;
    let user = await userModel.findOne({email: data.email , isDeleted: false});
    if(!user){
        user = await userModel.create(data);
    }
    else{
        throw  new Error('User already exists');
    }


    return user;
}

module.exports = {
    SignUp,
}