import React, { Component } from 'react';
 
class TimeView extends Component {
    render = () => {
        const { time } = this.props;
        return <div style={{fontWeight: "bold", color: "green"}}>
            { `Time: ${time}`}
             
        </div>
    }
}
 
export default TimeView;
