import React from 'react';
import pin from './icons/google-maps.png';
import pin2 from './icons/location.png';
import logo from './icons/cloud.png';

export default function Search(props) {
    const newloc = () => {
        let val = document.getElementById("search").innerHTML;
        props.changeLoc(val);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#E3E6E4"}}>
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <img src={logo} alt="Logo" height="30px" style={{marginRight: '10px'}}/>
                        Weather</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                    <span className="d-flex">
                    <img className="mx-2" src={pin2} alt="map" height="40px"/>
                        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={newloc}>Search</button>
                    </span>
                </div>
            </nav>
            <div style={{ height: "50px", backgroundColor: "#0C1D3B", display: "flex", alignItems: "center" }}>
                <span className="mx-2" style={{ fontSize: '20px' }}>
                    <img src={pin} alt="pin" height="40px" />
                    <span style={{position: 'relative', top:'13px'}}>
                        {props.loc}, {props.state} ({props.country})
                    </span>
                </span>
            </div>
        </div>
    )
}
