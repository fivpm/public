// Setup
const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
const fs = require('fs');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
//*
const path = require('path');
const router = express.Router();
//*
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index.html`));

let arrayOfObjects = [];

/* app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));  */

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
router.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
  });

//add the router
app.use(express.static(__dirname + '/views'));

/* Store all HTML files in views folder.
app.use(express.static(__dirname + '/Script'));
Store all JS and CSS in Scripts folder. */

app.use('/', router);

/**
app.set('view engine', 'html');
// Routes
app.get("/", (req, res) => {
   res.render('index');
});
**/

//* In app.post /addpost new blogs are saved to json file
app.post('/addpost', (request, response) => {
    let text = request.body;
    let file = './public/myjsonfile.json';
//    console.log(text);
    fs.readFile(file, (err,data) => {
        if (err){
            console.log(err);
        } else {
            //console.log(data);
            let obj = JSON.parse(data); //now it an object
            let length = obj.table.length+1;
            let newBlogObj = {id: length, body: text.body,comments: ""};
            obj.table.push(newBlogObj); //new blog is added to json object
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFile(file, json, 'utf8',  (err) => {
                if (err) console.log('Error writing file:', err) 
        
            })}});
            response.redirect('pages/blog.html');
}); /**End of app.post(/addpost) */
/****************** */

//* In app.post /commentsubmit new comments are saved to json file
app.post('/commentsubmit', (request, response) => {
    let newcomment = request.body.comments;
    let id = request.body.id;
    let file = './public/myjsonfile.json';
//    console.log(id);
    fs.readFile(file, (err,data) => {
        if (err){
            console.log(err);
        } else {
            //console.log(data);
            let obj = JSON.parse(data); //now it an object
            let length = obj.table.length+1;
            for(i in obj.table){
                if (obj.table[i].id === id){
//                    console.log('for if id 2');
                    let vali = obj.table[i].comments;
                    vali += newcomment;
                    obj.table[i].comments = vali;
                } 
            }
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFile(file, json, 'utf8',  (err) => {
                if (err) console.log('Error writing file:', err) 
            })
            
        }
              
    });
    //response.sendFile('pages/blog.html');
    //response.sendFile(path.join(__dirname, './views/pages', 'blog.html'));
    //response.redirect('/');
    //next();
    //response.send({redirect: '/'});
}); /**End of /commentsubmit */

//**************************** */

app.get("/getdata", (request,response) => {
    const data = fs.readFileSync('./public/myjsonfile.json',"utf-8");
    response.send(data);
});
//****************************** */

app.listen(3000, () => {
    console.log('Server listing on 3000');
});
