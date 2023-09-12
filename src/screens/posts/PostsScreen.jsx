import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import colors from '../../constants/colors';
import InputText from '../../components/input/input';
import AppButton from '../../components/button/AppButton';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../../permissions';
import routes from '../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addUserPost} from '../../redux/slices/auth.slices';

const PostsScreen = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
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
  const onSubmit = () => {
    const payload = {};
    payload.imgData = selectedImage;
    payload.title = title;
    payload.post = post;
    dispatch(addUserPost(payload));
    navigation.navigate(routes.PROFILE_SCREEN);
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginVertical: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => onSelectImage()}
          style={{
            marginBottom: 40,
            height: 200,
            backgroundColor: colors.color6,
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
          }}>
          <View>
            <Image
              style={{width: 200, height: 200}}
              source={{uri: selectedImage}}
            />
          </View>
        </TouchableOpacity>
        <InputText
          mode="outlined"
          label="Title"
          placeholder="Please Enter Title"
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
      <View
        style={{
          marginVertical: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <InputText
          mode="outlined"
          label="Post"
          placeholder="Please Enter Post"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={post}
          autoCapitalize={'none'}
          onChangeText={e => setPost(e)}
        />
      </View>

      <View style={{width: '100%'}}>
        <AppButton
          onPress={() => onSubmit()}
          btnStyle={{width: '100%', height: 40}}
          btnText="Post"
        />
      </View>
    </View>
  );
};

export default PostsScreen;
