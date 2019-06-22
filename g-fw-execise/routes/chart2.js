const express = require("express");
const route = express.Router();

//Basic middleware to prevent user going to page if NOT logged in
const redirectIndex = (request, response, next) => {
    if (request.session.userId) {
        next();
    } else {
        response.redirect("/");
    }
}

route.get("/", redirectIndex, (req, resp) => {
    resp.sendFile("chart2.html", {
        root: __dirname + "/../public/html"
    });
});

module.exports = route;