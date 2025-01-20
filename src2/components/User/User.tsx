import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {UserProps} from './types';
import {styles} from './styles';

export const ITEM_HEIGHT = 60;

const User: FC<UserProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{uri: item.avatar}}
        style={styles.image}
      />
      <View>
        <Text children={`${item.first_name}, ${item.last_name}`} />
        <Text children={item.email} />
      </View>
    </View>
  );
};

export default User;
