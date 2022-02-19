import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const HomeSearch = props => {
  return (
    <View>
      {/* input box */}

      <View style={styles.inputBox}>
        <Text style={styles.text}>Choose the Emergency</Text>
        <EvilIcons name={'arrow-right'} size={50} />
        <View style={styles.medContainer}>
          <FontAwesome5 name={'briefcase-medical'} size={16} />
          <Text>Emergency</Text>
        </View>
      </View>

      {/* previous destination */}

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Fontisto name={'ambulance'} color={'black'} size={100} />
          <Text style={styles.destinationText}>Call an Ambulance</Text>
        </View>
      </View>
      {/* home destination */}
    </View>
  );
};

export default HomeSearch;
