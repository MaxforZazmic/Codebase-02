import React from "react";
import "./Map.css";


const Map = props => {

 const mapRef = userRef();   
    const map = new window.google.maps.Map();

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>

}


export default Map;