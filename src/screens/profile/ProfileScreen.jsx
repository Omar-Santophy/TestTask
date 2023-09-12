import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AppButton from '../../components/button/AppButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
import colors from '../../constants/colors';
import images from '../../constants/images';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const {userPost, person, followers, following} = useSelector(
    state => state?.auth,
  );

  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <View style={{marginTop: 40}}>
          <Text
            style={{fontWeight: 'bold', color: colors.BLACK, letterSpacing: 2}}>
            {person?.name}
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              color: colors.GREY,
              letterSpacing: 2,
            }}>
            {person?.email}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50, bottom: 40}}
          source={{uri: person?.image}}
        />

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                {userPost.length}
              </Text>
              <Text style={{fontWeight: 'bold', color: colors.GREY}}>
                Posts
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                {followers.length}
              </Text>
              <Text style={{fontWeight: 'bold', color: colors.GREY}}>
                Followers
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                {following.length}
              </Text>
              <Text style={{fontWeight: 'bold', color: colors.GREY}}>
                Following
              </Text>
            </View>
          </View>
          <AppButton
            onPress={() => navigation.navigate(routes.EDIT_PROFILE)}
            btnStyle={{width: '100%', height: 40}}
            btnText="Edit Profile"
          />
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={userPost}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.gridItem}>
            <Image source={{uri: item.imgData}} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: (Dimensions.get('window').width - 20) / 3,
    height: (Dimensions.get('window').width - 20) / 3,
  },
});

export default ProfileScreen;
