import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   
    return (
        <div>
            <div className="style1">
                <div className="style2"><h4><Link to="/">Home</Link></h4></div>
                <div className="style2"><h4><Link to="/another">Dashboard 1</Link></h4></div>
                <div className="style2"><h4><Link to="/third">Dashboard 2</Link></h4></div>
            </div>
        </div>
    );
}

export default Header;