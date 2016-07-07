import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div id="map-container" style={{height: '400px'}} /> }
			googleMapElement={
				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lng}} />
			}
		/>
	);
}
