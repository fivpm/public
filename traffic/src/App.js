import React, {Component} from 'react';
import './App.css';
import CameraSel from './components/CameraSel';
import CameraView from './components/CameraView';
import TimeView from './components/TimeView';
import MapView from './components/MapView';

// https://www.digitraffic.fi/tieliikenne/#/ajantasaiset-lam-mittaustiedot
// https://tie.digitraffic.fi/api/v1/metadata/documentation/swagger-ui.html
 
class App extends Component {
  
  constructor() {
    super();
    this.state = { selectedPresetId: null, selectedTime: '', cameraPos: [] }
  }
 
  cameraSelected = (value,time) => {
    console.log(JSON.parse(value));
    const cameraId = JSON.parse(value).id;
    const cameraPosition = JSON.parse(value).pos;
    //console.log("CAMERAID: " + cameraId);
    //console.log("CAMERAPOSITION: " + cameraPosition);
    this.setState({ selectedPresetId: JSON.parse(value).id, selectedTime: time, cameraPos: JSON.parse(value).pos });
    //console.log("KKKKK: " + this.state.selectedPresetId);
  }
 
  render = () => {

    const { selectedPresetId, selectedTime, cameraPos } = this.state;

    return (
      
      <div className="app" style={{backgroundColor: "lightblue"}}>
        <div className="app-header" style={{  display: "flex", margin: "10px" }}>

            <h2 style={{  margin: "10px", display: "inline" }}>Traffic Camera</h2>
        
            <div className="timeContainer" style={{ position: "absolute", right: 100  }}   >
                        
                        <TimeView time={selectedTime}  /> 
                        
            </div>
        </div>

        <hr style={{ backgroundColor: "black", height: "1px",  border: "0" }}></hr>

        <div className="dropdownContainer" style={{  display: "flex", margin: "10px", backgroundColor: "lightblue" }}>

            <div  ><CameraSel
              selectedPresetId={this.state.selectedPresetId}
              onSelect={(value, time) => this.cameraSelected(value,time)}
            /></div>
         
        </div>

        <hr style={{ backgroundColor: "black", height: "1px",  border: "0" }}></hr>

        <div style = {{  position: "relative", display: "flex",  flexDirection: "row",  }}  >

            {selectedPresetId ?
              <div className="camera-container" >
                {console.log(selectedPresetId)}
                <CameraView presetId={selectedPresetId} />
              </div>
              : null
            }
            
            {cameraPos ?
            <div style={{  margin: "10px" }}>
              {console.log(cameraPos)}
              <MapView cameraPos={cameraPos}  />
            </div>
            : null
            }

        </div>
        
      </div>
    );  // end of return
  }
}

export default App;