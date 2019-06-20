//Get request to our server for the forum posts
//Once recieved, put them to the DOM
const getFwlogs = () => {
    fetch("http://localhost:3000/fwlog/getfwlogs")
        .then(data => data.json())
        .then(response => {
            const logs = document.querySelector("#fwlogs");
            logs.innerHTML = "";
            response.data.map(element => {
                let time = document.createElement("h4");
                let action = document.createElement("td");
                let protocol = document.createElement("td");
                let sourceip = document.createElement("td");
                let destinationip = document.createElement("td");
                let sourceport = document.createElement("td");
                let destinationport = document.createElement("td");
                let path = document.createElement("td");
                //const date = new Date(element.Timestamp);
                //h.innerHTML = date.setHours(date.getHours()-3);
                time.innerHTML = new Date(element.Timestamp);
                action.innerHTML = '<b>Action:</b> ' + element.Action;
                protocol.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+ '<b>Protocol:</b> ' + element.Protocol;
                sourceip.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+ '<b>SrcIp:</b> ' + element.SourceIp;
                destinationip.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+ '<b>DstIp:</b> ' + element.DestinationIp;
                sourceport.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+ '<b>SrcPort:</b> ' + element.SourcePort;
                destinationport.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+ '<b>DstPort:</b> ' + element.DestinationPort;
                path.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+ '<b>Path:</b> ' + element.Path;
                logs.append(time);
                logs.append(action);
                logs.append(protocol);
                logs.append(sourceip);
                logs.append(destinationip);
                logs.append(sourceport);
                logs.append(destinationport);
                logs.append(path);
                logs.append(document.createElement("hr"));
            });
        });
}

getFwlogs();

//Run our function every 5 seconds (5000 milliseconds)
/*
setInterval(() => {
    getPosts()
}, 5000);
*/