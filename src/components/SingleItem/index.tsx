import {Text, View} from 'react-native';
import {style} from './style';

const SingleItem = ({userId, id, title, body}) => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.numbertextStyle}>{id}</Text>
      <Text style={style.textStyle}>{title}</Text>
      <Text style={style.textStyle}>{body}</Text>
    </View>
  );
};
export default SingleItem;
