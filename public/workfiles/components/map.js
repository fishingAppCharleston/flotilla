import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div id="map-container" style={{height: '400px'}} /> }
			googleMapElement={
				<GoogleMap 
					ref={(map) => console.log(map)}
					defaultZoom={12} 
					defaultCenter={{lat: props.lat, lng: props.lng}}
				>
			</GoogleMap>

			}
		/>
	)}

function landingPins(pins) {
	return (
		pins.map((pin) => {
				return (
					<Marker
						{...{position: {lat: pin, lng: pin}}}
					/>
				);
		})
	)
}
