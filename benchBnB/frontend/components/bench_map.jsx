import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.benches);

    google.maps.event.addListener(this.map, 'idle', () => {
      let bounds = this.map.getBounds();
      let boundObj = {
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      };
      this.props.updateFilterThunk("bounds", boundObj);
    });

    google.maps.event.addListener(this.map, 'click', (e) => {
      let coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this._handleClick(coords);
    });
  }

  componentDidUpdate() {
    console.log(this.props.benches)
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _handleClick(coords){
   this.props.history.push({
     pathname: "benches/new",
     search: `lat=${coords.lat}&lng=${coords.lng}`
   });
 }

  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}


export default withRouter(BenchMap);
