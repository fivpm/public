//This will print drawings on chart2.html
const common = require('./charts');
const getFwlogs = () => {

      fetch("http://localhost:3000/fwlog/getfwlogs")
        .then(data => data.json())
        .then(response => {
            console.log(response);
            common.actionsChart1(response);
            common.protocolsChart2(response);
            common.portsChart3(response);
            common.pathsChart4(response);
            
        });
}

getFwlogs();

//Run our function every 5 seconds (5000 milliseconds)
/*
setInterval(() => {
    getFwlogs()
}, 5000);
*/