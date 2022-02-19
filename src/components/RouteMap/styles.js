import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    position: 'relative',
    height: '50%',
    width: '50%',
    // top: -10,
    backgroundColor: '#303841',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // shadow and elevation
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },

  text: {
    color: '#3E4149',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 1,
    // backgroundColor: '#161853',
  },
});

export default styles;
