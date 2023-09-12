import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  btnStyle: {
    width: moderateScale(100),
    height: moderateScale(40),
    backgroundColor: colors.BLACK,
  },
  btnTextStyle: {color: colors.WHITE},
  titleName: {fontWeight: 'bold', color: colors.BLACK},
  titleEmail: {fontWeight: 'bold', color: colors.GREY},
  userImage: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    marginVertical: moderateVerticalScale(10),
    marginStart: moderateScale(20),
  },
  followingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
export default styles;
