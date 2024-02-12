const services = require("../services/url");
const ejs = require("ejs");


async function handleShortUrl(req,res,next){
    try {
        console.log("I am in the controllers");
        let url = await  services.handleShortUrl(req);
        res.render("home", {
            id: url.shortId,
        });
    } catch (error) {
        next(error);
    }
}

async function getShortedUrl(req,res,next) {
    try {
        console.log("req======: ", req.params._shortId);
        let shortened_url = await services.getShortedUrl(req);
        if(!shortened_url) return res.status(404).send({message:"URL not found"});
        console.log("Helloooo i am controller");
        res.redirect(shortened_url.redirectUrl);
    } catch (error) {
        next(error);
    }
}


async function getTotalClicks(req,res,next){
    try {
        let totalClicks = await services.getTotalClicks(req);
        if(!totalClicks) return res.status(500).json({message:'Error occured while fetching data'})
        else{
            return res.status(200).json(totalClicks);
        }
    } catch (error) {
        next(error);
    }
}

async function EjsTestApi(req,res,next){
    try {
        let  urlsList = await services.EjsTestApi(req);
        console.log("urlsList====: ", urlsList);
        if(!urlsList) return  res.status(500).render('pages/error',{message : 'No URLs Found!'});
        res.render("home", {urls: urlsList});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    handleShortUrl,
    getShortedUrl,
    getTotalClicks,
    EjsTestApi,
}