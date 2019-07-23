import * as React from 'react';
import Conferences from './Conferences';
import '../App.css';

class Listings extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Listings element</h1>
                <Conferences/>
                
            </div>
        );
    }
}

export default Listings;
