import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {postData} from '../../constants/listData';
import ItemPosts from '../../components/lists/ItemPosts';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileInfoAsyncThunk, getUsersAsyncThunk, getpostAsyncThunk} from '../../redux/asyncThunk/authAsyncThunk';

const HomeScreen = () => {
  const {userPost} = useSelector(state => state?.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpostAsyncThunk());
    dispatch(getProfileInfoAsyncThunk({id: '60d0fe4f5311236168a10a03'}));

    dispatch(getUsersAsyncThunk({id: '60d0fe4f5311236168a10a03'}));
  }, []);

  return (
    <FlatList
      data={userPost}
      renderItem={({item}) => <ItemPosts item={item} />}
    />
  );
};

export default HomeScreen;
