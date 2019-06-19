//This will print drawings on Chart2 page
const common = require('./charts');
const getFwlogs = () => {
    //src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"
    fetch("http://localhost:3000/chart2/getfwlogs")
        .then(data => data.json())
        .then(response => {
            console.log(response);
            common.actionsChart1(response);
            common.actionsChart2(response);
            common.actionsChart3(response);
            common.actionsChart4(response);
        });
}

getFwlogs();

//Run our function every 5 seconds (5000 milliseconds)
/*
setInterval(() => {
    getFwlogs()
}, 5000);
*/