export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};

    //   debugger
    }

    updateMarkers(benches) {
        console.log(benches);
        benches.forEach(bench => {
            // if (!this.markers.hasOwnProperty(bench.id)){
            //     this.markers[bench.id] = bench;
            // }
            this.createMarkerFromBench(bench);
        })
    }

    createMarkerFromBench(bench) {
        
        this.markers[bench.id] = bench;
        const latLng = new google.maps.LatLng(bench.lat, bench.lng);
        console.log(latLng);
        const marker = new google.maps.Marker({
            position: latLng,
            title: bench.description
        });

        marker.setMap(this.map);
    }
    //...
  }