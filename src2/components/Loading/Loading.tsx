import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
