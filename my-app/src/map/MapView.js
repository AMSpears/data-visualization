import React, { useState } from "react";
import ReactMapGL, { Marker} from "react-map-gl";
import * as data from "../data/data.json";
import './mapView.css'

export const MapView = () => {
  const [viewport, setViewport] = useState({
    latitude: 39.381266,
    longitude: -97.922211,
    width: "100vw",
    height: "100vh",
    zoom: 2
  })

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle = "mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
         {
           data.allStates.map((place, idx) => (
          <Marker
            key={idx}
            latitude={place.latitude}
            longitude={place.longitude}
            >
            <button
              className="marker-btn"
            >
              <img src="/location-pin.svg" alt="City" />
            </button>
          </Marker>
         ))
      }
      </ReactMapGL>
    </div>
  );
}


export default MapView
