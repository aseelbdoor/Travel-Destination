import './Navbar.css';
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Navbar(){
    const [mode, setMode] = useState("0%");
    function Nav() {
        if(mode==='0%'){
            setMode("100%")
        }
        else{
            setMode('0%')
        }
    }
    return(
        <>
        <nav id="nav1">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About As</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </nav>
            <div id="nav2" onClick={Nav}>
            <i className="fa-solid fa-list"></i>
        </div>
        <div id="mopileNav" style={{width:mode}}>
            <div id="nav22" onClick={Nav}>
                <i className="fa-solid fa-list"></i>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About As</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Log In</Link>
        </div>
        </>
    )
}

export default Navbar;