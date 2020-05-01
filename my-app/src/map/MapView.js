import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import './mapView.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

class MapView extends Component {
  constructor() {
    super()
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    }
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(2),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    return (
      <div>
       {/*<div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
    </div>*/}
        <div id = 'map-container'></div>
      </div>
    )
  }
}



export default MapView
