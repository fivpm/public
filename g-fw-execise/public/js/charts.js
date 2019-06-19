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
                      text: 'Windows Firewall log Action'
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
            new Chart(document.getElementById("chart2b"), {
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
                      text: 'Windows Firewall log Action'
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
            new Chart(document.getElementById("chart2c"), {
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
                      text: 'Windows Firewall log Action'
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
            new Chart(document.getElementById("chart2d"), {
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
                      text: 'Windows Firewall log Action'
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