export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};
    }

    updateMarkers(benches) {
        benches.forEach(bench => {
            if (!this.markers.hasOwnProperty(bench.id)){
                this.createMarkerFromBench(bench);
            }
        })

        let benchObj = this.toObject(benches);

        for (let key in this.markers) {
            if (!benchObj.hasOwnProperty(key)) {
                this.removeMarker(this.markers[key])
            }
        }

        // if marker obj has property, and bench obj does not - remove that marker from map and this.markers
    }

    toObject(benchArr) {
        const benchObj = {};
        for (let i = 0; i < benchArr.length; i++) {
            let bench = benchArr[i];
            benchObj[bench.id] = bench;
        }

        return benchObj;
    }

    removeMarker(marker) {
        marker.setVisible(false);
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