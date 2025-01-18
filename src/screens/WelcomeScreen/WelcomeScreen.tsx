import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './style';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import {useDispatch} from 'react-redux';
import {addName} from '../../store/data';

const WelcomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function buttonPress() {
    dispatch(addName(name));
    navigation.navigate('phoneNumber');
  }
  return (
    <SafeAreaView style={styles.safeareaView}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View>
        <Text style={styles.insertNameView}>Please Enter Your Name</Text>
      </View>
      <Input
        keyboardType={'default'}
        placeholder={'Your Name'}
        setValue={value => setName(value)}
      />
      <CustomButton
        text="Next"
        onPress={buttonPress}
        disabled={name.length === 0}
      />
    </SafeAreaView>
  );
};
export default WelcomeScreen;
