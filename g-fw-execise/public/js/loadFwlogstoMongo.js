//const mongodb = require("mongodb").MongoClient;
const mongo = require("mongodb");
const { getDbUrl } = require("./../../db.js");

const url = getDbUrl();
let database;


//**Loading firewall log file to MongoDB collection "fwlogs" */
function loadFileToMongo(req) {
    console.log(req);
    mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
        database = db.db("exdb");
    
        const collectionName = database.collection("fwlogs");
            
        if(err){
            console.log('error on connection '+err);
        }
        else{
            console.log('***************Successfully connected to mongodb');
            const path = require("path");
            const readline = require('readline');
            const fs = require('fs');
    
            const fwFile = path.join(__dirname, '..','..','logs',req);
    //        console.log(fwFile);
            const myInterface = readline.createInterface({
                input: fs.createReadStream(path.join(__dirname, '..','..','logs',req))
            });
            let lineno = 0;
            myInterface.on('line', function (line) {
                lineno++;
                if(/^[0-9]/.test(line)){ //Row in log file will be ignored if the first char on line is other than digit 0-9
                    let tmp = line.split(" ");
                    //console.log(tmp.length);
                    const date = tmp[0];
                    const time = tmp[1];
                    const datetime = tmp[0] + "T" + tmp[1] + "Z";
                    //const dateISO = new Date("2016-03-25T12:00:00Z");
                    //const dateISO = new Date(datetime);
                    const action = tmp[2];
                    const protocol = tmp[3];
                    const srcIp = tmp[4];
                    const dstIp = tmp[5];
                    const srcPort = tmp[6];
                    const dstPort = tmp[7];
                    const path = tmp[16];
                    const myobj = { Timestamp: datetime, Action: action, Protocol:protocol, SourceIp:srcIp, DestinationIp:dstIp, SourcePort:srcPort, DestinationPort:dstPort, Path:path  };
                    //db.db("exdb").collection("fwlogs").insertOne(myobj, function(err, res) {
                        database.collection("fwlogs").insertOne(myobj, function(err, res) {
                        if (err) throw err;
                        //console.log("1 document inserted");
                        //db.close();
                    });   
/*
                    console.log(date);
                    console.log(time);
                    console.log(datetime);
                    console.log(action);
                    console.log(protocol);
                    console.log(srcIp);
                    console.log(dstIp);
                    console.log(srcPort);
                    console.log(dstPort);
                    console.log(path);

                    console.log('Line number ' + lineno + ': ' + line);*/
                    // console.log(/^[0-9]/.test(line));
                    // const dateString = line.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
                    // console.log(dateString);
                }
            });
            myInterface.on('close',function(){
                db.close();
                console.log('***************completed');
            });
            }
        });
}

module.exports = { loadFileToMongo };
    //**End of Loading firewall log file to MongoDB collection "fwlogs" */
