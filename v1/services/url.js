const urlModel = require("../../models/url");
const mongoose = require("mongoose");

const shortid = require("shortid");
async function handleShortUrl(req){
    const data = req.body;
    console.log("Data======:",data);
    console.log("Hello. I am in the handler.");
    if(!data || !data.url) return {status:400, message:"Missing parameter 'url'"};  //Check for required parameters
    let  shortID = shortid();  
    console.log("shortID=====: ",shortID); 
    let shortUrl = await urlModel.create({
        shortId: shortID,
        redirectUrl: data.url,
        visitHistory: [],
        userId: req.user._id,
    });
    console.log("The Short Url is : ",shortUrl);
   return shortUrl;
};

async function getShortedUrl(req){
    console.log("shortId====: ",req.params._shortId);
    const shortenedUrl = await  urlModel.findOneAndUpdate(
    {
        shortId : req.params._shortId,
    },
    { 
        $push:{visitHistory: {timestamps: Date.now()}}
    },
    { new: true },
);
console.log("shortenedUrl===: ",shortenedUrl);
return  shortenedUrl;

};


async function getTotalClicks(req) {
    const result = await  urlModel.findOne(
    {
        shortId: req.params._shortId
    },
    {
        _id: 1,
        visitHistory: 1,
         
    }
    ).lean();
    const Analytics = result.visitHistory;
    const TotalClicks = result.visitHistory.length;
    return  {Analytics,TotalClicks};
}

async function EjsTestApi(req) {
    const allUrls = await urlModel.find({});
    return allUrls;
}



module.exports = {
    handleShortUrl,
    getShortedUrl,
    getTotalClicks,
    EjsTestApi,
}