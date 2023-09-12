import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileContainer: {
    marginTop: moderateVerticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_name: {
    textAlign: 'center',
    fontSize: scale(16),
    marginTop: moderateVerticalScale(10.8),
  },
  ImageStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  modalImage: {
    position: 'absolute',
    bottom: moderateScale(0),
    right: moderateScale(0),
  },
  IconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    position: 'absolute',
    bottom: 0,
    left: moderateScale(12),
  },
  errorStyle: {
    fontSize: 10,
    color: 'red',
    marginTop: moderateScale(5),
  },

  inputContainer: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(51.55),
  },
  marginStyle: {
    width: '90%',
    marginVertical: moderateVerticalScale(10),
  },
  inputLabel: {
    fontSize: scale(12),
  },

  //==============Button Styled==========================
  BtnContainer: {
    alignItems: 'center',
    marginTop: moderateVerticalScale(49),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
  },
  //===============INPUT FIELD STYLE=====================
  inputField: {
    fontSize: scale(14),
    backgroundColor: colors.WHITE,
    width: '90%',
  },
  outLineStyles: {
    borderRadius: moderateScale(8),
    borderWidth: 0.5,
    borderColor: colors.BLACK,
  },
  underLineStyle: {
    borderRadius: moderateScale(8),
    borderWidth: 0.5,
  },
  textInput: {
    color: colors.BLACK,
    fontSize: 10,
  },
  inputFieldStyle: {
    marginVertical: moderateScale(20),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    borderColor: colors.BLACK,
    borderWidth: moderateScale(2),
  },
  editContainer: {
    marginTop: moderateVerticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  editImageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderColor: colors.ORANGE,
    bottom: moderateScale(50),
    left: moderateScale(50),
    tintColor: colors.GREY,
  },
});
