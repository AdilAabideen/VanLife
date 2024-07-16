import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    
    return (
        <div className="navContainer" >
            <div className="navLogo">
                <Link to="/">#VANLIFE</Link>
            </div>
            <ul className="navPages" >
                <li>
                    <Link to="/About" >About</Link>
                </li>
                <li>
                    <Link>Vans</Link>
                </li>
            </ul>
        </div>
    )
}