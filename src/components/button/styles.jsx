import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  btnStyle: {
    height: 48,
    borderColor: colors.BLACK,
    borderRadius: 100,
    borderWidth: 1,
    // marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  btnTextStyle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  btnColorStyle: {
    height: 48,
    backgroundColor: 'grey',
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnColorTextStyle: {
    fontSize: 14,
    color: 'white',
    marginHorizontal: 20,
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  labelStyle: {
    marginStart: 10,
    bottom: 5,
  },
  btnEditStyle: {
    height: 40,
    backgroundColor: colors.BLACK,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  btnEditTextStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
