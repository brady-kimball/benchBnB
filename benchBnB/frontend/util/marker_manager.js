export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    let benchObj = {};
    benches.forEach( bench => {
      if (!(bench.id in this.markers)) {
        this.createMarkerFromBench(bench);
      }
      benchObj[bench.id] = bench;
    });

    Object.keys(this.markers).forEach( id => {
      if (!benchObj[id]) {
        this.removeMarker(id);
      }
    });
  }

  removeMarker(id) {
    this.markers[id].setMap(null);
    delete this.markers[id];
  }

  createMarkerFromBench(bench) {
    let myLatLng = {
      lat: bench.lat,
      lng: bench.lng
    };
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: bench.description
    });
    this.markers[bench.id] = marker;
  }
}
