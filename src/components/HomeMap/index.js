import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const HomeMap = props => {
  // Finding lattitude and longitude

  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();
  // function success(pos) {
  //   var crd = pos.coords;
  //   const lat = parseInt(` ${crd.latitude}`);
  //   const long = parseInt(` ${crd.longitude}`);
  //   setLatitude(lat);
  //   setLongitude(long);
  // }

  // Geolocation.getCurrentPosition(success);

  return (
    <View
      style={{
        height: 300,
        backgroundColor: '#a0abff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
      </MapView>
    </View>
  );
};
export default HomeMap;
