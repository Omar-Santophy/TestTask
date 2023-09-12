import {Dimensions, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
  },
  gridItem: {
    flex: 1,
    margin: moderateScale(5),
    alignItems: 'center',
  },
  image: {
    width: (Dimensions.get('window').width - 20) / 3,
    height: (Dimensions.get('window').width - 20) / 3,
  },
  emailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioContainer: {
    marginTop: moderateVerticalScale(20),
    marginStart: moderateScale(40),
  },
  bioTitle: {
    fontWeight: 'bold',
    color: colors.BLACK,
    marginStart: moderateScale(20),
  },
  emailTitle: {
    fontWeight: 'bold',
    color: colors.GREY,
    marginStart: moderateScale(20),
  },

  userImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    bottom: moderateScale(55),
  },
  postContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  userPostTitle: {fontWeight: 'bold', color: colors.BLACK},
  userCountTitle: {fontWeight: 'bold', color: colors.BLACK},
  followingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  followingTitle: {fontWeight: 'bold', color: colors.BLACK},
  followersCountTitle: {fontWeight: 'bold', color: colors.BLACK},
  followingsCountTitle: {fontWeight: 'bold', color: colors.BLACK},
  followersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  followersTitle: {fontWeight: 'bold', color: colors.BLACK},
  editButtonStyle: {width: moderateScale(220), height: 40},
  userBioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.6,
  },
  userContainer: {flexDirection: 'row', margin: moderateScale(20)},
  editProfileContainer: {
    marginTop: moderateVerticalScale(-10),
  },
  cardUserComment: {
    fontSize: scale(10),
    color: colors.GREY,
  },
});
export default styles;
