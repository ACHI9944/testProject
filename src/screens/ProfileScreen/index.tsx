import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {style} from './style';

const ProfileScreen = () => {
  const name = useSelector(state => state.dataSlice.name);
  const number = useSelector(state => state.dataSlice.number);
  return (
    <View style={{flex: 1}}>
      <View style={style.viewStyle}>
        <Text style={style.textStyle}>Name: </Text>
        <Text style={style.text2Style}>{name}</Text>
      </View>
      <View style={style.viewStyle}>
        <Text style={style.textStyle}>Phone Number: </Text>
        <Text style={style.text2Style}>{number}</Text>
      </View>
    </View>
  );
};
export default ProfileScreen;
