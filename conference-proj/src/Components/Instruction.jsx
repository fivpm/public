import { connect } from 'react-redux';
import * as React from 'react';

import '../App.css';

class Instruction extends React.Component {
    //  constructor(props) {
    //      super(props);
    //    }

  
    render() {
        const items = (this.props.formItems !== "") ? (this.props.formItems) : "";
        return (
            <div>
                <p>Here you can post a conference
                    to this system, by inserting
                    the location of the conference
                    to the 'Location' input. Giving
                    more details about your conference
                    might boost its' popularity, which import
                    is why you can add more details to the
                    'Conference details' input. After that,
                    all you need to is press 'Reserve'.
                </p>
                <div className="amount">
                    <p> Amount of conferences: {items.length}</p>
                    <br></br><br></br>
                </div>
                    
                
                
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
       
            formItems: state.clientFormItems,
       
        }
    }
)(Instruction);
