import React from 'react';
import {View, Text, Image} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index';

const LoadingPage = props => {
  return (
    <View
      style={{
        backgroundColor: '#D3ECA7',
        flex: 1,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          top: '10%',
          left: '8%',
        }}>
        {/* parvah text */}

        <Text
          style={{
            fontSize: 95,
            color: '#003300',
          }}>
          परvah
          {/* परवाह */}
        </Text>
        <View
          style={{
            position: 'relative',
            top: '0%',
            left: '8%',
          }}>
          <Text
            style={{
              fontSize: 25,

              color: '#006600',
            }}>
            For you, Forever.
          </Text>
        </View>

        {/* image */}
        <View
          style={{
            position: 'relative',
            top: '10%',
            left: '1%',
            width: '80%',
            height: '35%',
            // backgroundColor: 'black',
          }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
            source={require('../../../src/assets/images/doctorCheck.png')}
          />
        </View>

        {/* start button */}
        <View
          style={{
            position: 'relative',
            width: '50%',
            top: '15%',
            left: '17%',
            alignItems: 'center',
            backgroundColor: '#e6ffe6',
            padding: 6,

            // shadow
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Tahoma',
              // fontFamily: 'monospace',
              color: '#006600',
            }}>
            Start
          </Text>
        </View>
      </View>

      {/* Bottom component */}
    </View>
  );
};

export default LoadingPage;
