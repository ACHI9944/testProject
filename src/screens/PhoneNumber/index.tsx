import {SafeAreaView, Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {styles} from './style';
import {useState} from 'react';
import Input from '../../components/Input';
import {useDispatch} from 'react-redux';
import {addNumber} from '../../store/data';
const pattern = new RegExp('^\\d{9}$');

const PhoneNumber = ({navigation}) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  function buttonPress() {
    dispatch(addNumber(number));
    navigation.replace('bottomTabs');
  }

  return (
    <SafeAreaView style={styles.safeareaView}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View>
        <Text style={styles.insertNameView}>
          Please Enter Your Phone Number
        </Text>
      </View>

      <Input
        keyboardType={'default'}
        placeholder={'Your Number'}
        setValue={value => setNumber(value)}
      />

      <CustomButton
        text="Next"
        onPress={buttonPress}
        disabled={!number.match(pattern)}
      />
    </SafeAreaView>
  );
};
export default PhoneNumber;
