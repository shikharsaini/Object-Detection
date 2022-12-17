import React, { useEffect } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
function Navbar(){
    const location = useLocation();
    let history = useNavigate();

    return(
    <nav className="navbar sticky-top navbar-expand-lg bg-light Navbox">
        <div className="container-fluid">
            <a className="navbar-brand heading" href="http://localhost:3000/">Object Detection <img src="https://img.icons8.com/external-others-iconmarket/100/000000/external-eagle-unites-state-of-america-others-iconmarket-2.png"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            {  (location.pathname=="/") && <div className="navbar-nav d-flex">
                                            {/* <button class="nav-link subheading" onClick={HandleLogin}>Login</button>
                                            <button class="nav-link subheading" onClick={HandleRegister} >Sign Up</button> */}
                                        </div>
            }
        </div>
    </nav>
    );
}

export default Navbar;