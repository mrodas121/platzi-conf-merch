import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const Map = () =>{

    const mapStyles = {
        height: "50vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 19.4267261, lng:-99
    };

    const containerStyle = {
        height: "500px",
        width: "800px"
    }

    return(
        <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
            <GoogleMap
                mapContainerStyle = {containerStyle}
                MapStyle = {mapStyles}
                zoom = {9}
                center = {defaultCenter}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;