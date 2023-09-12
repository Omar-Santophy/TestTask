import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import routes from '../constants/routes';
import colors from '../constants/colors';
import {
  EditProfile,
  FriendsListsScreen,
  HomeScreen,
  PostsScreen,
  ProfileScreen,
} from '../screens';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name={'home'} size={25} color={colors.BLACK} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.POSTS_SCREEN}
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name={'plussquare'} size={25} color={colors.BLACK} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name={'user-circle-o'}
              size={25}
              color={colors.BLACK}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.FRIENDS_LIST_SCREEN}
        component={FriendsListsScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name={'user-friends'}
              size={22}
              color={colors.BLACK}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
