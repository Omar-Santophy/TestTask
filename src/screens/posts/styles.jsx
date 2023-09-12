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
    marginTop: 10.8,
  },
  ImageStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  modalImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  IconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    position: 'absolute',
    bottom: 0,
    left: moderateScale(12),
  },
  errorStyle: {
    fontSize: scale(10),
    color: 'red',
    marginTop: moderateVerticalScale(5),
  },

  inputContainer: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(51.55),
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
    color: colors.BLACK,
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
    fontSize: scale(10),
  },
  btnPost: {width: '100%', height: moderateScale(40)},
  btnContainer: {width: '100%'},
  inputFieldStyle: {
    marginVertical: moderateVerticalScale(20),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: moderateVerticalScale(20),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImageStyle: {
    marginBottom: moderateVerticalScale(20),
    height: moderateScale(200),
    backgroundColor: colors.color6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  imageStyle: {width: moderateScale(200), height: moderateScale(200)},
});
