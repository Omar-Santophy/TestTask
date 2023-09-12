import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const AppButton = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  btnTextStyle = {},
}) => {
  return (
    <TouchableHighlight style={{marginHorizontal: 20}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{...styles.btnStyle, ...btnStyle}}>
        <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
      </TouchableOpacity>
    </TouchableHighlight>
  );
};

export default AppButton;
