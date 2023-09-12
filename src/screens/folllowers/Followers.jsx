import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {followers} from '../../constants/listData';
import AppButton from '../../components/button/AppButton';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {follow} from '../../redux/slices/auth.slices';

const Followers = () => {
  const navigation = useNavigation();
  const {followers} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View>
      <FlatList
        data={followers}
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
                onPress={() => {
                  dispatch(follow({id: item.id}));
                }}
                btnStyle={{
                  width: 100,
                  height: 40,
                  backgroundColor: colors.BLACK,
                }}
                btnTextStyle={{color: colors.WHITE}}
                btnText="Follow"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Followers;
