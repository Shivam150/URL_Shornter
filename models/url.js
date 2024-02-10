const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    // url: { type: String, required: true },
    shortId: { type: String, required: true , unique: true },
    redirectUrl: {type : String ,required:true},  // the URL to which we will be redirected when someone clicks on a link with this shortened ID
    visitHistory: [{timestamps:{type: Number}}],  // array of objects containing timestamp property
},
{
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
);


const urlModel = mongoose.model("Url", urlSchema);
module.exports = urlModel;