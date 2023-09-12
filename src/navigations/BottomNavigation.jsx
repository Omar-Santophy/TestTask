import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import routes from '../constants/routes';
import colors from '../constants/colors';
import {HomeScreen, PostsScreen, ProfileScreen} from '../screens';
import FirendsListScreen from '../screens/friendsList/FirendsListScreen';
const Tab = createBottomTabNavigator();

const BottomNavigation = ({focused}) => {
  return (
    <Tab.Navigator
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
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={25}
              color={focused ? colors.BLACK : colors.BLACK}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.POSTS_SCREEN}
        component={PostsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search-sharp' : 'search-outline'}
              size={25}
              color={focused ? colors.BLACK : colors.BLACK}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Feather
              name={focused ? 'plus' : 'plus'}
              size={25}
              color={colors.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.FRIENDS_LIST_SCREEN}
        component={FirendsListScreen}
        options={{
          tabBarIcon: () => (
            <Feather
              name={focused ? 'plus' : 'plus'}
              size={25}
              color={colors.WHITE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.BLACK,
  },
  shadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 7.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
