import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = props => {
  // Geolocation.getCurrentPosition(info => console.log(info));
  // Geolocation.getCurrentPosition(function (position) {
  //   let lat = position.coords.latitude;
  //   let long = position.coords.longitude;
  // });

  // let longitude = GeolocationCoordinatesInstance.longitude;
  // keyvalue pair
  // const GOOGLE_MAPS_APIKEY = 'AIzaSyBA2hRK8LMdeWfujTz-FhQcsvLAU2tgbLQ';

  // const origin = {
  //   latitude: 37.74825,
  //   longitude: -122.4324,
  // };

  // const destination = {
  //   latitude: 37.78825,
  //   longitude: -142.4324,
  // };

  return (
    <View
      style={{
        height: '70%',
        backgroundColor: '#D3ECA7',
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
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
      </MapView>
      <View
        style={
          {
            // position: 'relative',
            // height: '50%',
            // width: '50%',
            // // top: -10,
            // backgroundColor: '#303841',
            // padding: 15,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
            // // shadow and elevation
            // shadowColor: '#000000',
            // shadowOffset: {width: 0, height: 2},
            // shadowOpacity: 0.9,
            // shadowRadius: 3,
            // elevation: 3,
          }
        }></View>
    </View>
  );
};
export default RouteMap;
