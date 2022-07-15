import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 text-white h1">BULB<span style={{ fontSize: "12px" }}>dimmer</span></span>
                    <Link to="/form"> <button className="btn btn-secondary">+ Add Bulb</button> </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
