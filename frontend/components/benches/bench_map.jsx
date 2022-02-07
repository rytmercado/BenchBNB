import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {withRouter} from 'react-router-dom';

class BenchMap extends React.Component {
    constructor(props) {
        super(props);

        // this.mapClick = this.mapClick.bind(this.mapClick)
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
        this.MarkerManager.updateMarkers(this.props.benches);
        
        this.map.addListener("idle", () => {
            const latLngBounds = this.map.getBounds();
            const nE = latLngBounds.getNorthEast();
            const sW = latLngBounds.getSouthWest();
            const bounds = {
                "northEast": {"lat": nE.lat(),"lng": nE.lng()},
                "southWest": {"lat": sW.lat(), "lng": sW.lng()}
                }

            this.props.updateFilter('bounds', bounds);
        })

        this.map.addListener("click", (mouseEvent) => {
            const mouseLat = mouseEvent.latLng.lat();
            const mouseLng = mouseEvent.latLng.lng();
            const coords = {
                lat: mouseLat,
                lng: mouseLng
            }
            this._handleClick(coords);

        })
      }

    componentDidUpdate(){
            // this.MarkerManager = new MarkerManager(this.map);
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
            <div 
                id='map-container'
                ref={ map => this.mapNode = map }
                // onClick={this.mapClick}>
                >

            </div>
        )
    }
}

export default withRouter(BenchMap);