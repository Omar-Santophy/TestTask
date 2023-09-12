import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
    backgroundColor: colors.WHITE,
    marginVertical: verticalScale(10),
  },
  cardContainer: {
    marginHorizontal: moderateScale(10),
    height: moderateScale(200),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
  },
  cardUserIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    margin: moderateScale(10),
  },
  cardUserInfo: {
    flexDirection: 'row',
  },
  cardUserTitle: {
    fontSize: scale(12),
    color: colors.BLACK,
  },
  cardUserComment: {
    fontSize: scale(10),
    color: colors.GREY,
  },
  cardUserPostImage: {
    width: '100%',
    height: moderateScale(200),
  },
  cardLikContainer: {
    flexDirection: 'row',
    margin: moderateScale(20),
    justifyContent: 'space-between',
  },
  buttonLikeStyle: {
    width: moderateScale(100),
  },
  buttonCommentStyle: {
    width: moderateScale(100),
  },
  cardReactInfo: {
    marginTop: moderateVerticalScale(10),
  },
  cardInnerReactInfo: {
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    bottom: moderateScale(8),
  },
});
export default styles;
