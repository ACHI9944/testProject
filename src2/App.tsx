import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from './src/screens/MainScreen/MainScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
