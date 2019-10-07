import React, {Component} from 'react';
import { getCamera } from '../js/camselApi';

const moment = require('moment');

class CameraSel extends Component {

    constructor() {
        super();
        this.state = { kamerat: [], 
                       result: [],
                       selectedProvince: 'Uusimaa'
                     }
      }
     
      componentDidMount() {
        
        getCamera().then(res => {
            const time = moment(res.data.dataUpdatedTime);
            console.log("ZZZZ: " + time);    
            const newArr = res.data.features.map(obj => ({
                time: time, 
                weather: obj.properties.nearestWeatherStationId, 
                province: obj.properties.province,
                provincecode: obj.properties.provinceCode,
                presetsArr: obj.properties.presets.map(presetsobj => {
                    let coordArr = obj.geometry.coordinates;
                    coordArr.splice(2); // Third value in array is removed since it's value is always 0 and is not needed
                    coordArr = coordArr.reverse(); // Order of the values is changed since React Leaflet map library uses lat lon order
                    return {
                        id: presetsobj.presetId,
                        name: presetsobj.presentationName,
                        pos: coordArr
                    }
                }), 
            }));
          this.setState({
            kamerat: res.data,
            result: newArr,
            selectedTime: time
            
          })
          console.log(newArr);
        });
      }  // end of componentdidmount

    selectionChanged = (event, selectedTime) => {
        console.log("Selected:"  + event.target.value);
        this.props.onSelect(event.target.value, selectedTime);
        
    }

    provinceChanged = (event) => {
        console.log("PROVINCE:" + event.target.value);
        this.setState({selectedProvince: event.target.value});
        //this.props.onSelect(event.target.value);
    }
 
    render = () => {
       // console.log(this.state.result);
        const { result } = this.state;
        const { selectedPresetId } = this.props;
      // console.log(JSON.stringify(this.props.selectedPresetId));
        const { selectedTime } = this.state;
        return <div className="Camera-selection-container">
            <div className="Camera-selection-text" style={{  margin: "10px" }}>
                Select camera to be shown: 
                <form>

                    Province: 
                        <select style={{  margin: "10px" }} onChange={this.provinceChanged} value={this.state.selectedProvince}>
                            {
                            [... new Set(result.map(iresult =>   // set command shows unique values on dropdown list
                                    (iresult.province)))].map((cam) =>
                                    
                                                                <option
                                                                    value={cam}>
                                                                    {cam}
                                                                </option>
                                                            )
                                                            
                            }
                        </select>

                        Road: 
                        <select style={{  margin: "10px" }} onChange={ (e) => this.selectionChanged(e, selectedTime)} value={selectedPresetId} >
                            {
                            result.map((cam) => cam.presetsArr.map (obj => 
                                    {
                                            //console.log("GGGG: " + selectedTime)
                                        if ( cam.province === this.state.selectedProvince){ // only selected province cameras are shown on this dropdown list

                                                return  <option
                                                            value={JSON.stringify(obj)}>
                                                            {obj.name}
                                                        </option>
                                        }
                                    }
                                ))
                            }
                        </select>
                </form>
            </div>
        </div>
    } // end of render
}

export default CameraSel;
