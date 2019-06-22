//This will print timeseries drawing on chart1.html
//const common = require('./charts');
const getFwlogs = () => {
    //src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"
//    fetch("http://localhost:3000/chart2/getfwlogs")
      fetch("http://localhost:3000/fwlog/getfwlogs")
        .then(data => data.json())
        .then(response => {
            console.log(response);
           fwChart1a(response);
            
        });
}

getFwlogs();

//Run our function every 5 seconds (5000 milliseconds)
/*
setInterval(() => {
    getFwlogs()
}, 5000);
*/

// Beginning of chart1.html
//timeseries chart for total number of request per second in firewall log file
 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 function fwChart1a(response) {
      const freqMap = new Map();
      const times = [];
            
    //console.log(response.data);
      response.data.forEach(function(data) {
        
        times.push(data.Timestamp);
      });  
      console.log(times);

      times.forEach(function(time) {
        let timestamp = new Date(time);
        let key = months[timestamp.getMonth()] + " " + timestamp.getDay() + " " + timestamp.getFullYear() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
        let count = freqMap.get(key) || 0;
        freqMap.set(key, ++count);
      });
      console.log(freqMap);

      const ctx = document.getElementById("chart1a").getContext('2d');
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [...freqMap.keys()],
          datasets: [{
            label: 'Total Requests per second',
            data: [...freqMap.values()],
           // backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
           backgroundColor: ["#3e95cd"]
          }],
        },
        options: {
          elements: {
              line: {
                  tension: 0
              }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
          }
        }
      });


} //End of function fwChart1a
  
function getWordCnt(dataArr){
    return dataArr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}
    
