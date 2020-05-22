import React from 'react';
import Logo from '../images/esx-es5.svg';

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="" id="navbar-wrapper">
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
                <a className="navbar-brand d-flex flex-row" href="/#">
                    <img src={Logo} width="48" height="auto" className="d-inline-block" alt=""/>
                    <span className="h3 pl-2 mb-0">Transpilyzer Online REPL</span>
                </a>            
            </nav>
        </div>
        
    )
}

export default Navbar;
