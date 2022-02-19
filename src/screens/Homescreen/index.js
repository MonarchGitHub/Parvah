import React from 'react';
import {View, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index';

const Homescreen = props => {
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

export default Homescreen;
