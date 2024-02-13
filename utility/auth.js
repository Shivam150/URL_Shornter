// const sessionIdToUserMap =  new Map();

const jwt = require("jsonwebtoken");

function setUserToken(user){
    // sessionIdToUserMap.set(id,user);
    const payload = {
        // _id: user._id,
        ...user,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
}

function verifyUser(token){
    try {
        if(!token){
            return  null;
        }
        console.log("token====:",token);
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
        
    } catch (error) {
        throw error;
    }
    // return sessionIdToUserMap.get(id);
}


module.exports = {
    setUserToken,
    verifyUser,
}