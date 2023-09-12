import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from '../../screens/followings/styles';
import AppButton from '../../components/button/AppButton';
import {unfollow} from '../../redux/slices/auth.slices';
import routes from '../../constants/routes';
import {useNavigation} from '@react-navigation/native';

const Followings = () => {
  const {following} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <FlatList
      data={following}
      renderItem={({item}) => {
        return (
          <View style={styles.followingContainer}>
            <Image source={{uri: item.picture}} style={styles.userImage} />
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(routes.PROFILE_SCREEN, {
                    id: item.id,
                  });
                }}
                style={styles.titleName}>
                <Text style={styles.titleName}>
                  {item?.title.toUpperCase() +
                    '.' +
                    ' ' +
                    item?.firstName +
                    ' ' +
                    item?.lastName}
                </Text>
              </TouchableOpacity>
            </View>
            <AppButton
              onPress={() => {
                dispatch(unfollow({id: item.id}));
              }}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
              btnText="Unfollow"
            />
          </View>
        );
      }}
    />
  );
};

export default Followings;
