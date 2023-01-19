import React, { useEffect, useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) {
    return (
      <div className="contact_map">
        Loading...
      </div>
    );
  } else {
    const center = {lat: 30.27, lng: -97.73};
    return (
      <div className="contact_map">
        <GoogleMap zoom={10} center={center} mapContainerClassName='map_container' >
          <Marker position={center}/>
        </GoogleMap>
      </div>
    );
  }
}

export default Map;