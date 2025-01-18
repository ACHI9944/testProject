import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PhoneNumber from '../screens/PhoneNumber';
import MyTabs from './BottomTab';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator
      initialRouteName="welcomeScreen"
      screenOptions={{headerShown: false}}>
      <Screen name="welcomeScreen" component={WelcomeScreen} />
      <Screen name="phoneNumber" component={PhoneNumber} />
      <Screen name="bottomTabs" component={MyTabs} />
    </Navigator>
  );
};
export default Router;
