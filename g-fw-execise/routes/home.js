const express = require("express");
const fs = require("fs");
//const app = express();
const route = express.Router();
//const formidable = require('formidable')

//app.set('view engine', 'ejs');

//Basic middleware to prevent user going to /home page if NOT logged in
const redirectIndex = (request, response, next) => {
    if (request.session.userId) {
        next();
    } else {
        response.redirect("/");
    }
}

//Send home.html...
/****
 route.get("/", redirectIndex, (request, response) => {
    response.sendFile("home.html", {
        root: __dirname + "/../public/html"
    });
});
****/
route.get("/", redirectIndex, async (request, response) => {
    userstr = request.session.username;
    userstr = userstr.charAt(0).toUpperCase() + userstr.slice(1);
    const directoryPath = __dirname + "/../logs"; //all logs will be shown on userpage
    let allFiles;
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        allFiles = files;
        response.render(__dirname + '/../views/userpage', {
            user:userstr,
             files: allFiles
        });
    });
});



//Destroy cookie and logout...
route.post("/logout", (request, response) => {
    request.session.destroy(err => {
        if (err) return response.redirect("/home");
        response.clearCookie("cookieName");
        response.redirect("/");
    });
});

module.exports = route;