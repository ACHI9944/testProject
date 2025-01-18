import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  pressable: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#424343',
    borderRadius: 10,
    justifyContent: 'center',
  },
  disabledView: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#818383',
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  disabledtext: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default style;
