!function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){const o=a(1);fetch("http://localhost:3000/fwlog/getfwlogs").then(t=>t.json()).then(t=>{console.log(t),o.actionsChart1(t),o.protocolsChart2(t),o.portsChart3(t),o.pathsChart4(t)})},function(t,e){function a(t){return t.reduce(function(t,e){return t[e]=t[e]+1||1,t},{})}t.exports={actionsChart1:function(t){let e={datas:[]},o=[];t.data.forEach(function(t){e.datas.push(t.Action)});const n=a(e.datas);o=Object.keys(n),console.log(o);let s=[];o.forEach(t=>{s.push(n[t])}),e.datas=s,new Chart(document.getElementById("chart2a"),{type:"pie",data:{labels:o,datasets:[{label:"test",data:e.datas,backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"]}]},options:{legend:{display:!0},title:{display:!0,text:"Windows Firewall log Actions"}}})},protocolsChart2:function(t){let e={datas:[]},o=[];t.data.forEach(function(t){e.datas.push(t.Protocol)});const n=a(e.datas);o=Object.keys(n),console.log(o);let s=[];o.forEach(t=>{s.push(n[t])}),e.datas=s,new Chart(document.getElementById("chart2b"),{type:"pie",data:{labels:o,datasets:[{label:"test",data:e.datas,backgroundColor:["#c45850","#e8c3b9","#3cba9f","#8e5ea2","#3e95cd"]}]},options:{legend:{display:!0},title:{display:!0,text:"Windows Firewall log Protocols"}}})},portsChart3:function(t){let e={datas:[]},o=[];t.data.forEach(function(t){e.datas.push(t.DestinationPort)});const n=a(e.datas);o=Object.keys(n),console.log(o);let s=[];o.forEach(t=>{s.push(n[t])}),e.datas=s,new Chart(document.getElementById("chart2c"),{type:"pie",data:{labels:o,datasets:[{label:"test",data:e.datas,backgroundColor:["#3cba9f","#3e95cd","#8e5ea2","#e8c3b9","#c45850"]}]},options:{legend:{display:!0},title:{display:!0,text:"Windows Firewall log DestinationPorts"}}})},pathsChart4:function(t){let e={datas:[]},o=[];t.data.forEach(function(t){e.datas.push(t.Path)});const n=a(e.datas);o=Object.keys(n),console.log(o);let s=[];o.forEach(t=>{s.push(n[t])}),e.datas=s,new Chart(document.getElementById("chart2d"),{type:"pie",data:{labels:o,datasets:[{label:"test",data:e.datas,backgroundColor:["#e8c3b9","#3e95cd","#8e5ea2","#3cba9f","#c45850"]}]},options:{legend:{display:!0},title:{display:!0,text:"Windows Firewall log Paths"}}})}}}]);