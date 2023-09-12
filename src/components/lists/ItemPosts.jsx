import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const ItemPosts = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(routes.PROFILE_SCREEN, {
            id: item.owner.id,
          })
        }
        style={styles.cardUserInfo}>
        <Image
          source={{uri: item?.owner?.picture}}
          style={styles.cardUserIcon}
        />
        <View style={styles.cardReactInfo}>
          <Text style={styles.cardUserTitle}>
            {item?.owner?.title?.toUpperCase() +
              '.' +
              ' ' +
              item?.owner?.firstName +
              ' ' +
              item?.owner?.lastName}
          </Text>
          <Text style={styles.cardUserComment}>{item?.text}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Image source={{uri: item?.image}} style={styles.cardUserPostImage} />
      </View>
      <View style={styles.cardReactInfo}>
        <View style={styles.cardInnerReactInfo}>
          <TouchableOpacity style={styles.buttonLikeStyle}>
            <AntDesign name={'like2'} size={25} />
            <Text>{item?.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCommentStyle}>
            <FontAwesome name={'comment-o'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemPosts;
