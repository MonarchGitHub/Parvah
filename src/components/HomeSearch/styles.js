import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#FF9999',
    // color: 'white',
    margin: 10,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadow and elevation
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },

  inputText: {
    color: '#ff3300',
    fontSize: 20,
    fontWeight: '600',
  },

  medContainer: {
    backgroundColor: '#000000',
    border: 9,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 110,
    padding: 10,
    fontWeight: '600',
    // shadow and elevation
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: '600',
    // shadow and elevation
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },

  iconContainer: {
    backgroundColor: '#ea3535',
    padding: 10,
    paddingTop: 30,
    width: 370,
    height: 200,
    margin: 6,
    fontSize: 90,
    fontWeight: '600',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 4,
    borderRadius: 15,
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

  destinationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
