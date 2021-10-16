import React from 'react'
import {Component} from "react"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class GoogleMap extends Component {
    render() {
      return (
        <Map style={{height:"500px", width:"55%", marginLeft:"30%", marginTop:"25px"}} google={this.props.google} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              
          </InfoWindow>
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDlV79IAyvTGY5nqmz6ORs_1f40J56n_yI")
  })(GoogleMap)