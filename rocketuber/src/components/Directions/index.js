import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="" // Put here your Google Maps API key
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
