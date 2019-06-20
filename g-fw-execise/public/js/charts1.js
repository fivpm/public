  //This will print drawings on Chart2 page
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
 //pie chart for firewall paths which values are Receive or Send
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
  
  
   //pie chart for firewall paths which values are Receive or Send
   function actionsChart2(response) {
    /*
        for (let i = 0; i < response.data.length; i++) {
          console.log(response.data[i].Timestamp);
      }
      */
          let dataset = {
            datas: []
          };
          let labels = [];
        //console.log(response.data);
          response.data.forEach(function(data) {
            
            dataset.datas.push(data.Path);
          });
          //Array dataset.datas will include all the occurences of words: allow and drop
          const dataArr = dataset.datas;  
          const paths = getWordCnt(dataArr); //getWordCnt will count the amount of each individual item (allow and drop) in array
          //console.log(actions); //actions is a object: {allow:5, drop:4}
          labels = Object.keys(paths); //actions object keys to labels array
          console.log(labels);
          let values = [];
          labels.forEach((path) => {
            values.push(paths[path]);
          });
          //console.log(test);
          dataset.datas = values;
          //console.log(dataset.datas);
            //var chartInstance = new Chart(ctx, {
            new Chart(document.getElementById("chart1b"), {
              type: 'pie',
              data: {
                labels: labels,
                datasets: [{
                  label: 'test',
                  data: dataset.datas,
                //   backgroundColor: 'rgba(255, 99, 132, 0.2)', // make the bars translucent red
                  backgroundColor: ["#e8c3b9", "#3e95cd", "#8e5ea2","#3cba9f","#c45850"],
                //   borderColor: 'rgba(255, 99, 132, 1)', // make the borders of the bars opaque red
                //   borderWidth: 1 // set the border width to 1 pixel
                }]
              },
              options: {
                /* insert chart options here */
                
                    legend: { display: true },
                    title: {
                      display: true,
                      text: 'Windows Firewall log Paths'
                    }
              },
                    // the y-axis should start at 0
                /* scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero:true
                    }
                  }]
                },*/
            
            });
        // });
  }
  
    // End of chart1.html
  
  
    function getWordCnt(dataArr){
        return dataArr.reduce(function(prev,next){
            prev[next] = (prev[next] + 1) || 1;
            return prev;
        },{});
      }
    
    //module.exports = { actionsChart1,actionsChart2,actionsChart3,actionsChart4 };
