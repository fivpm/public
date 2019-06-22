const { getDbUrl } = require("./db");
const express = require("express");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
//const formidable = require('formidable')
const app = express();
const loadFile = require('./public/js/loadFwlogstoMongo');
const deleteLogs = require('./public/js/deleteLogsfromMongo');
const PORT = 3000;
const url = getDbUrl();
app.set('view engine', 'ejs');

/**
 * Define basic midware
 */
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    name: "cookieName",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    secret: "aSecret",
    cookie: {
        //maxAge: 1000*60,
        sameSite: true,
        secure: false
    },
    store: new MongoStore({ url: url })
}));

/**
 * Define routes
 */
app.use("/", require("./routes/index.js")); //renders /public/html/index.html which has register and login forms
app.use("/home", require("./routes/home.js")); //renders /views/userpage.ejs
app.use("/fwlog", require("./routes/fwlog.js")); //renders /public/html/fwlog.html
app.use("/chart1", require("./routes/chart1.js")); //renders /public/html/chart1.html
app.use("/chart2", require("./routes/chart2.js")); //renders /public/html/chart2.html
//app.use("/submit-form", require("./routes/home.js"));

//Load Windows firewall logs file to Mongo on /views/userpage.ejs
app.post('/submit-form', (req, res) => {
    //console.log(req.body.file);
    file = req.body.file;
    loadFile.loadFileToMongo(file);
    res.redirect("/home")
  })

 //Remove all the firewall logs from Mongo on /views/userpage.ejs
 app.post('/delete-logs', (req, res) => {
    //console.log(req.body.file);
    emptyMongoYes = req.body.emptyMongo;
    deleteLogs.removeLogs(emptyMongoYes);
    res.redirect("/home")
  })

//Destroy cookie and logout...
app.get("/logout", (request, response) => {
    request.session.destroy(err => {
        if (err) return response.redirect("/home");
        response.clearCookie("cookieName");
        response.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log("Listening to port " + PORT);
});