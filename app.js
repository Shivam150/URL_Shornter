var express = require("express");
var path = require("path");
const connection = require("./connection/connect");
// var http = require("http");
// var debug = require("debug")("mmnt:server"); 
var v1Routes = require("./v1/routes/url");
var staticRoute = require("./v1/routes/staticRoute");
var userRouter = require("./v1/routes/user");
// const https = require("https");
// const fs = require("fs");
const cookieParser = require( "cookie-parser" );
require("dotenv").config();

var app = express();

app.set( 'views' , path.resolve("./views")); // Point to the folder where our templates are located.
app.set("view engine" , "ejs"); // set up ejs for templating.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3001;

app.listen(PORT, async () => {
    console.log(`Running on port: ${PORT}.`);
    await connection.mongoDbconnection();
    console.log("connected to Mongo");
  });

app.use("/api", v1Routes);
app.use("/" , staticRoute);
app.use("/api/v1/user", userRouter);