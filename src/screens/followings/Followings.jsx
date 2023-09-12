import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import AppButton from '../../components/button/AppButton';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';
import {useSelector} from 'react-redux';
import routes from '../../constants/routes';

const Followings = () => {
  const navigation = useNavigation();
  const {following} = useSelector(state => state.auth);
   return (
    <View>
      <FlatList
        data={following}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.img}}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginVertical: 10,
                  marginStart: 20,
                }}
              />
              <View>
                <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: 'bold', color: colors.GREY}}>
                  {item.email}
                </Text>
              </View>
              <AppButton
                // onPress={() => navigation.navigate(routes.POSTS_SCREEN)}
                btnStyle={{
                  width: 100,
                  height: 40,
                  backgroundColor: colors.BLACK,
                }}
                btnTextStyle={{color: colors.WHITE}}
                btnText={item.follower ? 'Follow' : 'Following'}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Followings;
