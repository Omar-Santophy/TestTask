import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Followers from '../folllowers/Followers';
import routes from '../../constants/routes';
import Followings from '../followings/Followings';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {getUsersAsyncThunk} from '../../redux/asyncThunk/authAsyncThunk';

const Tab = createMaterialTopTabNavigator();

export default function FriendsListsScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsersAsyncThunk());
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: Dimensions.get('window').width / 2},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name={routes.FOLLOWERS} component={Followers} />
      <Tab.Screen name={routes.FOLLOWINGS} component={Followings} />
    </Tab.Navigator>
  );
}
