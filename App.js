import React, {useEffect} from 'react';
// import type {Node} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homescreen from './src/screens/Homescreen';
import AmbulanceScreen from './src/screens/AmbulanceScreen';
import LoadingPage from './src/screens/LoadingPage';
import RouteMap from './src/components/RouteMap';

const App: () => React$Node = () => {
  // Permission Access
  const androidPermission = async () => {
    // Amplify.configure(awsconfig);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Parvah App Camera Permission',
          message: 'Parvah App needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    // Good!
    if (Platform.os === 'android') {
      androidPermission();
    } else {
      //
    } // Side-effect
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Icon name="rocket" size={30} color="#900" /> */}
      <LoadingPage />
    </>
  );
};
export default HomeMap;
