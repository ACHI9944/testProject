import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <Text children="Something went wrong :(" style={styles.error} />
    </View>
  );
};

export default ErrorComponent;
