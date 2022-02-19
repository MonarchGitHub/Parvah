import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: -10,
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

  title: {
    color: '#FCF8E8',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#D4E2D4',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  learnMore: {
    color: '#ff0000',
    fontSize: 15,
    // fontWeight: 'bold',
  },
});

export default styles;
