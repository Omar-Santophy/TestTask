import {View, Image, TouchableOpacity, Alert, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import colors from '../../constants/colors';
import InputText from '../../components/input/input';
import AppButton from '../../components/button/AppButton';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../../permissions';
import routes from '../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addUserPost} from '../../redux/slices/auth.slices';
import {
  getProfileInfoAsyncThunk,
  getUsersAsyncThunk,
} from '../../redux/asyncThunk/authAsyncThunk';

const PostsScreen = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState('');
  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS === 'ios') {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };
  useEffect(() => {
    dispatch(getProfileInfoAsyncThunk({id: '60d0fe4f5311236168a10a03'}));
    dispatch(getUsersAsyncThunk({id: '60d0fe4f5311236168a10a03'}));
  }, []);
  const onSubmit = () => {
    const payload = {};
    payload.imgData = selectedImage;
    payload.title = title;
    dispatch(addUserPost(payload));
    navigation.navigate(routes.HOME_SCREEN);
  };
  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSelectedImage(image.path);
      console.log(image);
    });
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSelectedImage(image.path);
      console.log('selected Image', image);
    });
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => onSelectImage()}
          style={styles.btnImageStyle}>
          <Image style={styles.imageStyle} source={{uri: selectedImage}} />
        </TouchableOpacity>
        <InputText
          mode="outlined"
          label="Caption"
          placeholder="Please Enter Caption"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={title}
          autoCapitalize={'none'}
          onChangeText={e => setTitle(e)}
        />
      </View>

      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => onSubmit()}
          btnStyle={styles.btnPost}
          btnText="Post"
        />
      </View>
    </View>
  );
};

export default PostsScreen;
