import React from 'react';
import {View, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import Rou from '../../components/HomeSearch/index';

const RouteScreen = props => {
  return (
    <View style={{backgroundColor: '#EEEEEE'}}>
      <View>
        <HomeMap />
      </View>
      {/* Covid  */}
      <CovidMessage />

      {/* Bottom component */}
      <HomeSearch />
    </View>
  );
};

export default RouteScreen;
