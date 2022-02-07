export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};

    //   debugger
    }

    updateMarkers(benches) {
        console.log(this.markers)
        benches.forEach(bench => {
            if (!this.markers.hasOwnProperty(bench.id)){
                // this.markers[bench.id] = bench;
                this.createMarkerFromBench(bench);
            }
        })
        
        let benchObj = this.toObject(benches);
        console.log(benchObj)
        console.log(this.markers)
    }

    toObject(benchArr) {
        const benchObj = {};
        for (let i = 0; i < benchArr.length; i++) {
            let bench = benchArr[i];
            benchObj[bench.id] = bench;
        }

        return benchObj;
    }

    createMarkerFromBench(bench) {
        
        const latLng = new google.maps.LatLng(bench.lat, bench.lng);
        this.markers[bench.id] = new google.maps.Marker({
            position: latLng,
            title: bench.description
        });

        this.markers[bench.id].setMap(this.map);
    }
    //...
  }