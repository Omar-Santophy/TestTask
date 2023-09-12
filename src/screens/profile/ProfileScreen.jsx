import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppButton from '../../components/button/AppButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import ItemImages from '../../components/lists/ItemImages';
import {
  getProfileInfoAsyncThunk,
  getUsersAsyncThunk,
} from '../../redux/asyncThunk/authAsyncThunk';
import routes from '../../constants/routes';
import Loader from '../../components/loader/Loader';

const ProfileScreen = () => {
  const {userPost, profile, profilePosts, logger} = useSelector(
    state => state?.auth,
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const routesInfo = useRoute();
  const id = routesInfo?.params?.id;
  console.log(id, '......id');
  useEffect(() => {
    if (!id) {
      setLoading(false);
    }
    dispatch(getProfileInfoAsyncThunk({id: id ?? '60d0fe4f5311236168a10a03'}))
      .unwrap()
      .then(res => {
        console.log(res);
        setLoading(false);
      })
      .catch(err => console.log(err));
    dispatch(getUsersAsyncThunk({id: id ?? '60d0fe4f5311236168a10a03'}))
      .unwrap()
      .then(res => {
        console.log(res);
        setLoading(false);
      })
      .catch(err => console.log(err));
    return () => {
      dispatch(getProfileInfoAsyncThunk({id: '60d0fe4f5311236168a10a03'}));

      dispatch(getUsersAsyncThunk({id: '60d0fe4f5311236168a10a03'}));
      setLoading(true);
    };
  }, [id]);

  console.log(profile, 'kkkkk');
  debugger;

  const navigation = useNavigation();
  return (
    <View>
      <Loader visible={loading} />

      <View style={styles.emailContainer}>
        <View style={styles.bioContainer}>
          {profile.id === '60d0fe4f5311236168a10a03' ? (
            <Text style={styles.bioTitle}>
              {logger?.title +
                '.' +
                ' ' +
                logger?.firstName +
                ' ' +
                logger?.lastName}
            </Text>
          ) : (
            <Text style={styles.bioTitle}>
              {profile?.title?.toUpperCase() +
                '.' +
                ' ' +
                profile?.firstName +
                ' ' +
                profile?.lastName}
            </Text>
          )}
          <Text style={styles.emailTitle}>
            {profile.id === '60d0fe4f5311236168a10a03'
              ? logger?.email
              : profile?.email}
          </Text>
        </View>
      </View>

      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri:
              profile.id === '60d0fe4f5311236168a10a03'
                ? logger?.picture
                : profile?.picture,
          }}
        />
        <View style={styles.editProfileContainer}>
          <View style={styles.userBioContainer}>
            <View style={styles.postContainer}>
              <Text style={styles.userPostTitle}>{userPost.length}</Text>
              <Text style={styles.userCountTitle}>Posts</Text>
            </View>
            <View style={styles.followersContainer}>
              <Text style={styles.followersCountTitle}>10</Text>
              <Text style={styles.followersTitle}>Followers</Text>
            </View>
            <View style={styles.followingContainer}>
              <Text style={styles.followingsCountTitle}>2</Text>
              <Text style={styles.followingTitle}>Following</Text>
            </View>
          </View>
          {profile.id === '60d0fe4f5311236168a10a03' && (
            <AppButton
              onPress={() => navigation.navigate(routes.EDIT_PROFILE)}
              btnStyle={styles.editButtonStyle}
              btnText="Edit Profile"
            />
          )}
        </View>
      </View>

      <FlatList
        numColumns={3}
        data={profilePosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ItemImages item={item} />}
      />
    </View>
  );
};

export default ProfileScreen;
