import {Pressable, Text} from 'react-native';
import style from './style';

const CustomButton = ({text, onPress, disabled}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={disabled ? style.disabledView : style.pressable}>
      <Text style={disabled ? style.disabledtext : style.text}>{text}</Text>
    </Pressable>
  );
};
export default CustomButton;
