import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
    bottom: moderateScale(20),
    fontWeight: 'bold',
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
    marginStart: moderateScale(50),
  },
  buttonCommentStyle: {
    width: moderateScale(100),
  },
  cardReactInfo: {
    marginTop: moderateVerticalScale(20),
  },
  cardInnerReactInfo: {
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    bottom: moderateScale(8),
  },
});
export default styles;
