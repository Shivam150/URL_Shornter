const services =   require('../services/user');



async function SignUp(req,res,next) {
    try {
        const user = await services.SignUp(req);
        // res.status(201).json({message: 'User created successfully', data : user});
        return res.render("home",{data:user.name});    
    } catch (error) {
        next(error);
    }
}



module.exports = {
    SignUp,
}