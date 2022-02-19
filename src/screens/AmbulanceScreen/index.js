import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap/index';
import SecondPanel from '../../components/RouteMap/SecondPanel';

const AmbulanceScreen = props => {
  return (
    <View style={{backgroundColor: '#EEEEEE'}}>
      <View>
        <RouteMap />
      </View>
      {/* Bottom component */}
      <SecondPanel />
    </View>
  );
};

export default AmbulanceScreen;
