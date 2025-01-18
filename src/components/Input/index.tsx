import {TextInput, View} from 'react-native';
import {style} from './style';

const Input = ({setValue, keyboardType, placeholder}) => {
  return (
    <View style={style.inputView}>
      <TextInput
        style={style.textStyle}
        onChangeText={value => setValue(value)}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
