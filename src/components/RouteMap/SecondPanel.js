import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const SecondPanel = props => {
  return (
    <View>
      {/* input box */}

      <View style={styles.inputBox}>
        <Text style={styles.text}>Ambulance is on the way!</Text>
        <Feather name={'alert-octagon'} size={50} />
      </View>
    </View>
  );
};

export default SecondPanel;
