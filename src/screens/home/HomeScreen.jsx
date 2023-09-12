import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../components/button/AppButton';
import routes from '../../constants/routes';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <AppButton
          onPress={() => {
            navigation.navigate(routes.POSTS_SCREEN);
          }}
          color={colors.MAROON}
          btnText={'Post'}
        />
      </View>
      <View style={{width: '90%'}}>
        <AppButton
          onPress={() => {
            navigation.navigate(routes.PROFILE_SCREEN);
          }}
          color={colors.MAROON}
          btnText={'Profile'}
        />
      </View>
      <View style={{width: '90%'}}>
        <AppButton
          onPress={() => {
            navigation.navigate(routes.FRIENDS_LIST_SCREEN);
          }}
          color={colors.MAROON}
          btnText={'Friends List'}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
