import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/followings/styles';
import routes from '../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const ItemFollowing = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.followingContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.PROFILE_SCREEN, {
            id: item.owner.id,
          });
        }}>
        <Image source={{uri: item.picture}} style={styles.userImage} />
        <View>
          <Text style={styles.titleName}>
            {item?.owner?.title.toUpperCase() +
              '.' +
              ' ' +
              item?.owner?.firstName +
              ' ' +
              item?.owner?.lastName}
          </Text>
        </View>
      </TouchableOpacity>
      <AppButton
        // onPress={() => navigation.navigate(routes.POSTS_SCREEN)}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        btnText={item.follower ? 'Follow' : 'Following'}
      />
    </View>
  );
};

export default ItemFollowing;
