import React, { Component } from 'react';
import { SelectedFilters, ReactiveList, ResultList } from '@appbaseio/reactivesearch';

const traficodes = require('./codes.json');

const { ResultListWrapper } = ReactiveList;

class Results extends Component {

    constructor(props) {
      super(props)
      this.state = {
        visible: {id:0,show:false} //show more - less button state
      }
    }
  
    showMore = (id) => {
     this.setState((prevState, props) => {
       return {visible: {id:id,show:!prevState.visible.show}}
    });
    }
    render() {
  
        return (

      <div className="mainBar">

                <SelectedFilters />

                <ReactiveList
                    react={             
                                {
                                
                                and: ["mainSearch", "ajoneuvoluokkaHaku", "ajoneuvonkayttoHaku", "kayttovoimaHaku", "ajoneuvoryhmaHaku", "co2Slider", "matkamittariSlider", "ensirekisterointipvmHaku"]
                                }
                            }
                            componentId="SearchResult"
                >
                        
                        {({ data}) => {
                            console.log(data);
                            return (
                            <ResultListWrapper>
                                {
                                    data.map(item => (
                                        <ResultList key={item._id}>
                                            
                                            <ResultList.Content>
                                                <ResultList.Description>
                                                    <div>
                                                        <div>{item.message}</div>
                                                        
                                                    </div>
                                                    <span>
                                                {/*  { ajoneuvonkaytto.filter(d => d.id === item.ajoneuvonkaytto);}    */}
                                                        {(this.state.visible.show && this.state.visible.id === item._id) && (
                                                        
                                                        <div>
                                                        <ul>
                                                            <li className="list-item">Merkki: {item.merkkiSelvakielinen}</li>
                                                            <li className="list-item">Kaupallinen nimi: {item.kaupallinenNimi}</li>
                                                            <li className="list-item">Mallimerkintä: {item.mallimerkinta}</li>
                                                            <li className="list-item">Ajoneuvonkäyttö: {traficodes.ajoneuvonkaytto[item.ajoneuvonkaytto]}</li>
                                                            <li className="list-item">Ajoneuvoryhmä: {traficodes.ajoneuvoryhma[item.ajoneuvoryhma]}</li>
                                                            <li className="list-item">Ensirekisteröinti pvm: {item.ensirekisterointipvm}</li>
                                                            <li className="list-item">Käyttöönotto pvm: {item.kayttoonottopvm}</li>
                                                            <li className="list-item">Matkamittarilukema: {item.matkamittarilukema}</li>
                                                            <li className="list-item">Co2: {item.Co2}</li>
                                                            <li className="list-item">Käyttövoima: {traficodes.kayttovoima[item.kayttovoima]}</li>
                                                            <li className="list-item">Iskutilavuus: {item.iskutilavuus}</li>
                                                            <li className="list-item">Istumapaikkojen lkm: {item.istumapaikkojenLkm}</li>
                                                            
                                                            <li className="list-item">Teho: {item.suurinNettoteho}</li>
                                                            <li className="list-item">Sylintereiden lkm: {item.sylintereidenLkm}</li>
                                                            <li className="list-item">Omamassa: {item.omamassa}</li>
                                                            <li className="list-item">Kokonaismassa: {item.tieliikSuurSallKokmassa}</li>
                                                        </ul>
                                                        </div>
                                                        )} 

                                                            <button onClick={() => this.showMore(item._id)}>Show / Hide details</button>

                                            
                                                    </span>     

                                                </ResultList.Description>
                                            </ResultList.Content>
                                        </ResultList>
                                    ))
                                }
                            </ResultListWrapper>
                            )
                        }
                    }
                </ReactiveList>
        </div>
        ); // end of return
    } // end of render
}
export default Results;