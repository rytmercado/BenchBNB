import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class BenchMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 }, // this is SF
          zoom: 13
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers();

        this.map.addListener("idle", () => {
            const latLngBounds = this.map.getBounds();
            const nE = latLngBounds.getNorthEast();
            const sW = latLngBounds.getSouthWest();
            console.log(nE.lat());

            const bounds = {
                "northEast": {"lat": nE.lat(),"lng": nE.lng()},
                "southWest": {"lat": sW.lat(), "lng": sW.lng()}
                }

            this.props.updateBounds(bounds);
        })
      }

    componentDidUpdate(){
            this.MarkerManager = new MarkerManager(this.map);
            this.MarkerManager.updateMarkers();
    }

    render() {
        return(
            <div 
                id='map-container'
                ref={ map => this.mapNode = map }>
            </div>
        )
    }
}