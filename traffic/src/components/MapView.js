import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
 
const stamenTonerTiles = '  http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//const position = [60.6715, 25.3509];   [lat = -, lon = |]

const zoomLevel = 7;

class MapView extends Component {
   
    render() {
        let { cameraPos } = this.props;
        console.log(cameraPos)

        if (cameraPos.length === 0){ //if statement to prevent error when application is started and no camera is chosen
            cameraPos = [60.67159928875896,25.350988003318495];
        }
        //const posArr = cameraPos.toString().split(',').map((posString) => Number(posString) );
        //console.log("FDADGGDS: ",  posArr);
        return (
           
            <div >
                 
                <Map    style={{  height: "600px", width: "600px" }}
                    //center={position}
                    center={cameraPos}
                    zoom={zoomLevel}
                >
                    <TileLayer
    
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        
                    />
                    <Marker position={cameraPos}>
                        <Popup>
                            <span>Chosen camera location.</span>
                        </Popup>
                    </Marker>
                </Map>
                
            </div>
        
        ); // end of return
      }  // end of render
}

export default MapView;
