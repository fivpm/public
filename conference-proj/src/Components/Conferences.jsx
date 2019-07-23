import * as React from 'react';
import { connect } from 'react-redux';
import { removeConf } from '../store/actions';

class Conferences extends React.Component {

    //constructor(props) {
    //    super(props);
    //}
    
      removeConf(index) {
        this.props.modifier(index);
    }

    render() {
        console.log(this.props.formItems);
        const items = (this.props.formItems !== "") ? (this.props.formItems) : "";
        return (
            <>
            {(items !== "") 
            ? 
                <ul style= {{ listStyle: 'none'}} >
     
                    {items.map((item,index) => 
                    <p><li key={item.id}><u>Conference {index + 1}:</u> <br></br> {item} <button type="button" 
                    onClick={()=> {return this.removeConf(index)}}>Poista</button></li></p>
                    
                    )}
                
                </ul>
            :  <h3>AAA</h3>
            }
            </>
        );
    }
}

export default connect(
    (state) => {
        return {
            formFirstname: state.clientFormFirstname,
            formLastname: state.clientFormLastname,
            formItems: state.clientFormItems,
            counter: state.counter
        }
    }
,{ modifier: removeConf })(Conferences);