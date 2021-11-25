import React from 'react';
import { Link } from 'react-router-dom';
import './css/style_header.css';

const Header = () => {
    return (
        <div>
            <h1 className="App"><span className="Main">BVC</span></h1>
            <ul className="nav">
                <li><Link to="Home" className="aa">Home</Link></li>
                <li><Link to="Courses" className="aa">Course</Link></li>
                <li><Link to="Transcript" className="aa">Transcript</Link></li>
                <li><Link to="Contact" className="aa">Contact</Link></li>
                <li><Link to="Account" className="aa">Account</Link></li>
                <li><Link to="Logout" className="aa" id="logout">Logout</Link></li>
            </ul>
        </div>
    );
}
export default Header;