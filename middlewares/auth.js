const {verifyUser} = require("../utility/auth");

async function restrictToLoggedInUserOnly(req,res, next){
    const userUid = req.cookies?.userId;
    if(!userUid) return res.redirect("/login");
    const user = verifyUser(userUid);
    if (!user)
    {
        return res.redirect("/login");
    }

    req.user = user;
    next();
}


module.exports = {
    restrictToLoggedInUserOnly,
}