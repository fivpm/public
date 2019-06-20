//pie chart for firewall actions which values are Allow or Drop
function actionsChart1(response) {
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
            
            dataset.datas.push(data.Action);
          });
          //Array dataset.datas will include all the occurences of words: allow and drop
          const dataArr = dataset.datas;  
          const actions = getWordCnt(dataArr); //getWordCnt will count the amount of each individual item (allow and drop) in array
          //console.log(actions); //actions is a object: {allow:5, drop:4}
          labels = Object.keys(actions); //actions object keys to labels array
          console.log(labels);
          let values = [];
          labels.forEach((action) => {
            values.push(actions[action]);
          });
          //console.log(test);
          dataset.datas = values;
          //console.log(dataset.datas);
            //var chartInstance = new Chart(ctx, {
            new Chart(document.getElementById("chart2a"), {
              type: 'pie',
              data: {
                labels: labels,
                datasets: [{
                  label: 'test',
                  data: dataset.datas,
                //   backgroundColor: 'rgba(255, 99, 132, 0.2)', // make the bars translucent red
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                //   borderColor: 'rgba(255, 99, 132, 1)', // make the borders of the bars opaque red
                //   borderWidth: 1 // set the border width to 1 pixel
                }]
              },
              options: {
                /* insert chart options here */
                
                    legend: { display: true },
                    title: {
                      display: true,
                      text: 'Windows Firewall log Actions'
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
  
  //pie chart for firewall protocols which values are Udp or Tcp
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
            
            dataset.datas.push(data.Protocol);
          });
          //Array dataset.datas will include all the occurences of words: allow and drop
          const dataArr = dataset.datas;  
          const protocols = getWordCnt(dataArr); //getWordCnt will count the amount of each individual item (allow and drop) in array
          //console.log(actions); //actions is a object: {allow:5, drop:4}
          labels = Object.keys(protocols); //actions object keys to labels array
          console.log(labels);
          let values = [];
          labels.forEach((protocol) => {
            values.push(protocols[protocol]);
          });
          //console.log(test);
          dataset.datas = values;
          //console.log(dataset.datas);
            //var chartInstance = new Chart(ctx, {
            new Chart(document.getElementById("chart2b"), {
              type: 'pie',
              data: {
                labels: labels,
                datasets: [{
                  label: 'test',
                  data: dataset.datas,
                  backgroundColor: [
                    "#c45850",
						        "#e8c3b9",
                    "#3cba9f",
                    "#8e5ea2",
                    "#3e95cd"
                  ],
                //   backgroundColor: 'rgba(255, 99, 132, 0.2)', // make the bars translucent red
                 // backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                //   borderColor: 'rgba(255, 99, 132, 1)', // make the borders of the bars opaque red
                //   borderWidth: 1 // set the border width to 1 pixel
                }]
              },
              options: {
                /* insert chart options here */
                
                    legend: { display: true },
                    title: {
                      display: true,
                      text: 'Windows Firewall log Protocols'
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
  
  //pie chart for firewall destination ports which values are eg 53, 443, 137...
  function actionsChart3(response) {
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
            
            dataset.datas.push(data.DestinationPort);
          });
          //Array dataset.datas will include all the occurences of words: allow and drop
          const dataArr = dataset.datas;  
          const destinationports = getWordCnt(dataArr); //getWordCnt will count the amount of each individual item (allow and drop) in array
          //console.log(actions); //actions is a object: {allow:5, drop:4}
          labels = Object.keys(destinationports); //actions object keys to labels array
          console.log(labels);
          let values = [];
          labels.forEach((destinationport) => {
            values.push(destinationports[destinationport]);
          });
          //console.log(test);
          dataset.datas = values;
          //console.log(dataset.datas);
            //var chartInstance = new Chart(ctx, {
            new Chart(document.getElementById("chart2c"), {
              type: 'pie',
              data: {
                labels: labels,
                datasets: [{
                  label: 'test',
                  data: dataset.datas,
                //   backgroundColor: 'rgba(255, 99, 132, 0.2)', // make the bars translucent red
                  backgroundColor: ["#3cba9f", "#3e95cd", "#8e5ea2","#e8c3b9","#c45850"],
                //   borderColor: 'rgba(255, 99, 132, 1)', // make the borders of the bars opaque red
                //   borderWidth: 1 // set the border width to 1 pixel
                }]
              },
              options: {
                /* insert chart options here */
                
                    legend: { display: true },
                    title: {
                      display: true,
                      text: 'Windows Firewall log DestinationPorts'
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
  
  //pie chart for firewall paths which values are Receive or Send
  function actionsChart4(response) {
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
            new Chart(document.getElementById("chart2d"), {
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
  
  function getWordCnt(dataArr){
    return dataArr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
  }

module.exports = { actionsChart1,actionsChart2,actionsChart3,actionsChart4 };