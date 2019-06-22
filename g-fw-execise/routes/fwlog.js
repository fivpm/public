const mongo = require("mongodb");
const { getDbUrl } = require("./../db.js");
const express = require("express");
const route = express.Router();

//Connect to DB and save the database handler object to "database"
//Notice that this is the second time we create this connection object (Previously in index.js as well)
//We might want to use the same connection in both of these files by
//exporting the database object from some additional js file for example
//This method is fine here anyway...
const url = getDbUrl();
let database;
mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
    database = db.db("exdb");
});

//Basic middleware to prevent user going to page if NOT logged in
const redirectIndex = (request, response, next) => {
    if (request.session.userId) {
        next();
    } else {
        response.redirect("/");
    }
}

route.get("/", redirectIndex, (req, resp) => {
    resp.sendFile("fwlog.html", {
        root: __dirname + "/../public/html"
    });
});

route.get("/getfwlogs", (request, response) => {
    database.collection("fwlogs").find({}).toArray((err, arr) => {
        response.send({ data: arr });
    });
});

module.exports = route;