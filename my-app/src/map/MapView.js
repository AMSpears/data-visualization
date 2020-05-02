import React, { useState, useEffect} from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
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

  const [selectedState, setSelectedState] = useState(null)

  useEffect( () => {
    const listener = evt => {
      if (evt.key === 'Escape') {
        setSelectedState(null)
      }

      window.addEventListener("keydown", listener)

      return () => {
        window.removeEventListener("keydown", listener)
      }
    }
  }, [])

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
               onClick={e => {
                e.preventDefault();
                setSelectedState(place);
              }}
            >
              <img src="/location-pin.svg" alt="City" />
            </button>
          </Marker>
         ))}
          {selectedState ? (
          <Popup
            latitude={selectedState.latitude}
            longitude={selectedState.longitude}
            onClose={() => {
              setSelectedState(null);
            }}
          >
            <div>
              <h2> Stats:</h2>
              <p> Cases: {selectedState.casesReported} </p>
              <p> Range: {selectedState.range}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}


export default MapView
