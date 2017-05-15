export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach( bench => {
      if (!(bench.id in this.markers)) {
        this.createMarkerFromBench(bench);
      }
    });
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
  //...
}
