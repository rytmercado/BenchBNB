export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};
    //   let testBench = {description: 'Bench 6', lat: 37.733082, lng: -122.438545};
    //   this.createMarkerFromBench(testBench);
    }

    updateMarkers(benches) {
        console.log(benches);
        // benches.forEach(bench => {
        //     if (!this.markers.hasOwnProperty(bench.id)){
        //         this.markers[bench.id] = bench;
        //     }
        // })
    }

    createMarkerFromBench(bench) {
        this.markers[bench.id] = bench;

        new google.maps.Marker({
            position: { lat: bench.lat, lng: bench.lng },
            map,
            title: bench.description
        })
    }
    //...
  }