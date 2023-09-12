import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import BottomNavigation from './BottomNavigation';
import {
  EditProfile,
  FriendsListsScreen,
  PostsScreen,
  ProfileScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.HOME_SCREEN} component={BottomNavigation} />
        <Stack.Screen name={routes.POSTS_SCREEN} component={PostsScreen} />
        <Stack.Screen
          name={routes.FRIENDS_LIST_SCREEN}
          component={FriendsListsScreen}
        />
        <Stack.Screen name={routes.EDIT_PROFILE} component={EditProfile} />
        <Stack.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
