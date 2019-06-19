const mongo = require("mongodb");
const { getDbUrl } = require("./../../db.js");
const url = getDbUrl();
let database;

//**Remove firewall logs MongoDB collection "fwlogs" */
function removeLogs(req) {
    console.log(req);
    mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
        database = db.db("exdb");

        //const collectionName = database.collection("fwlogs");
        /**** */
        
        if(err){
            console.log('error on connection '+err);
        }
        else{
            database.collection("fwlogs").drop(function(err, delOK) {
                if (err) throw err;
                if (delOK) console.log("Collection deleted");
                db.close();
              });
            }
    });
}

module.exports = { removeLogs };
