import React, { Component } from 'react';
import {
    ReactiveBase,
    DataSearch,
    MultiList,
    DateRange,
    RangeSlider
  } from '@appbaseio/reactivesearch';

import Results from './Results';
import {esIndex} from '../noGit/secrets.json';

//const {esIndex} = secrets;


const traficodes = require('./codes.json');

class PageOneContent extends Component {

    render() {
            return (
                <div>
                      <p>  <br></br> </p>
                    <ReactiveBase
                    app="es-example"
                    //credentials=""
                    //url="https://"
                    url={esIndex} //Elasticsearch index at https://bonsai.io/ to where Trafi data has been loaded  by Logstash
                    
                    >

                            <div className="navbar">
                                <DataSearch
                                className="datasearch"
                                componentId="mainSearch"
                                dataField="merkkiSelvakielinen"
                                title="Search"
                                placeholder="Malli tai merkki haku"
                                queryFormat="or"
                                />
                        </div>
                        <div className="display">
                            <div className="leftSidebar">
                                {/**First multilist search */}
                                <MultiList
                                    componentId="ajoneuvoluokkaHaku"
                                    dataField="ajoneuvoluokka.keyword"

                                    renderItem={(list, count, isSelected) => (
                                        <div style={{width: '100%'}}>
                                        
                                        <span>   {traficodes.ajoneuvoluokka[list]} </span>
                                        
                                        <span style={{float: 'right'}}>{count}</span>
                                            
                                        </div>
                                        )}
                                    title="Ajoneuvoluokka"
                                    size={100}
                                    showCheckbox={false}
                                    showSearch={false}
                                    className="authors"
                                    react={{
                                        and: ["mainSearch", "ajoneuvoluokkaHaku", "ajoneuvonkayttoHaku", "kayttovoimaHaku", "ajoneuvoryhmaHaku", "co2Slider", "matkamittariSlider", "ensirekisterointipvmHaku"]
                                    }}
                                />

                                {/**Second multilist search */}
                                <MultiList
                                    componentId="ajoneuvonkayttoHaku"
                                    dataField="ajoneuvonkaytto.keyword"
                                
                                        renderItem={(list, count, isSelected) => (
                                        <div style={{width: '100%'}}>
                                        {/* {console.log(list)} */}
                                                <span>   {traficodes.ajoneuvonkaytto[list]} </span>
                                                <span style={{float: 'right'}}>{count}</span>
                                        </div>
                                    )}

                                    title="Ajoneuvonkaytto"
                                    size={100}
                                    showCheckbox={false}
                                    showSearch={false}
                                    className="authors"
                                    
                                    react={{
                                        and: ["mainSearch", "ajoneuvoluokkaHaku", "ajoneuvonkayttoHaku", "kayttovoimaHaku", "ajoneuvoryhmaHaku", "co2Slider", "matkamittariSlider", "ensirekisterointipvmHaku"]
                                    }}
                                />

                                {/**Third multilist search */}
                                <MultiList
                                    componentId="kayttovoimaHaku"
                                    dataField="kayttovoima.keyword"

                                    renderItem={(list, count, isSelected) => (
                                        <div style={{width: '100%'}}>
                                        {/* {console.log(list)} */}
                                        <span>   {traficodes.kayttovoima[list]} </span>
                                        
                                        <span style={{float: 'right'}}>{count}</span>
                                            
                                        </div>
                                        )}

                                    title="Käyttövoima"
                                    size={100}
                                    showCheckbox={false}
                                    showSearch={false}
                                    className="authors"
                                    
                                    react={{
                                        and: ["mainSearch", "ajoneuvoluokkaHaku", "ajoneuvonkayttoHaku", "kayttovoimaHaku", "ajoneuvoryhmaHaku", "co2Slider", "matkamittariSlider", "ensirekisterointipvmHaku"]
                                    }}
                                />

                                {/**Fourth multilist search */}
                                <MultiList
                                    componentId="ajoneuvoryhmaHaku"
                                    dataField="ajoneuvoryhma.keyword"

                                    renderItem={(list, count, isSelected) => (
                                        <div style={{width: '100%'}}>
                                    {/*   {console.log(list)} */}
                                        <span>   {traficodes.ajoneuvoryhma[list]} </span>
                                        
                                        <span style={{float: 'right'}}>{count}</span>
                                            
                                        </div>
                                        )}

                                    title="Ajoneuvoryhmä"
                                    size={100}
                                    showCheckbox={false}
                                    showSearch={false}
                                    className="authors"
                                    
                                    react={{
                                        and: ["mainSearch", "ajoneuvoluokkaHaku", "ajoneuvonkayttoHaku", "kayttovoimaHaku", "ajoneuvoryhmaHaku", "co2Slider", "matkamittariSlider", "ensirekisterointipvmHaku"]
                                    }}
                                />

                                <RangeSlider
                                    componentId="co2Slider"
                                    dataField="Co2"
                                    title="Co2"
                                    range={{
                                        "start": 0,
                                        "end": 500
                                    }}
                                    rangeLabels={{
                                        "start": "0",
                                        "end": "500"
                                    }}
                                />

                                <RangeSlider
                                    componentId="matkamittariSlider"
                                    dataField="matkamittarilukema"
                                    title="Matkamittarilukema"
                                    range={{
                                        "start": 0,
                                        "end": 5000000
                                    }}
                                    rangeLabels={{
                                        "start": "0",
                                        "end": "5000000"
                                    }}
                                />

                                <DateRange
                                    dataField="ensirekisterointipvm"
                                    componentId="ensirekisterointipvmHaku"
                                    title="Ensirekisteröintipvm"
                                    numberOfMonths={1}
                                    queryFormat="date" // yyyyMMdd

                                    react={{
                                        and: ["mainSearch", "ajoneuvoluokkaHaku", "ajoneuvonkayttoHaku", "kayttovoimaHaku", "ajoneuvoryhmaHaku", "ensirekisterointipvmHaku"]
                                    }}
                                />
                            </div> 
                            <Results />
                            
                        </div>
                    </ReactiveBase>
                </div>
            ); // end of return
    } // end of render
}
export default PageOneContent;