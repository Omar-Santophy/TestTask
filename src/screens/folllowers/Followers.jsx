import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../../components/button/AppButton';

import styles from '../../screens/folllowers/styles';
import {follow} from '../../redux/slices/auth.slices';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
const Followers = () => {
  const navigation = useNavigation();
  const {followers} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={followers}
      renderItem={
        ({item}) => {
          console.log(item, '......item followers');
          return (
            <View style={styles.followersContainer}>
              <Image source={{uri: item.picture}} style={styles.userImage} />
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(routes.PROFILE_SCREEN, {
                      id: item.id,
                    });
                  }}
                  style={styles.titleName}>
                  <Text>
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
                  dispatch(follow({id: item.id}));
                }}
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle}
                btnText="Follow"
              />
            </View>
          );
        }

        // {
        //   console.log(item, 'jjjas');
        //   // <ItemFollowers item={item}/>
        // }
      }
    />
  );
};

export default Followers;
