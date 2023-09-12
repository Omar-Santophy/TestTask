import {View, Image, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../constants/images';
import colors from '../../constants/colors';
import InputText from '../../components/input/input';
import {styles} from './styles';
import AppButton from '../../components/button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {editprofile} from '../../redux/slices/auth.slices';
import routes from '../../constants/routes';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../../permissions';

const EditProfile = () => {
  const {profile, person} = useSelector(state => state?.auth);
  const navigation = useNavigation();
  const [name, setName] = useState(profile?.firstName);
  const [email, setEmail] = useState(profile?.email);
  const [address, setAddress] = useState(profile?.location?.street);
  const [phone, setPhone] = useState(profile?.phone);
  const [country, setCountry] = useState(profile?.location?.country);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(profile?.picture);

  const onSubmithandler = e => {
    const payload = {};
    payload.name = name;
    payload.email = email;
    payload.address = address;
    payload.phone = phone;
    payload.country = country;
    payload.image = selectedImage;
    dispatch(editprofile(payload));
    navigation.navigate(routes.PROFILE_SCREEN);
  };

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
    <View>
      <View style={styles.editContainer}>
        <Image source={{uri: selectedImage}} style={styles.userImage} />

        <TouchableOpacity onPress={() => onSelectImage()}>
          <Image
            resizeMode="center"
            source={images.edit}
            style={styles.editImageStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputFieldStyle}>
        <InputText
          mode="outlined"
          label="Name"
          placeholder="Please Enter Name"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={name}
          autoCapitalize={'none'}
          onChangeText={e => setName(e)}
        />
      </View>
      <View style={styles.inputFieldStyle}>
        <InputText
          mode="outlined"
          label="Email"
          placeholder="Please Enter Email"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={email}
          autoCapitalize={'none'}
          onChangeText={e => setEmail(e)}
        />
      </View>
      <View style={styles.inputFieldStyle}>
        <InputText
          mode="outlined"
          label="Mobile"
          placeholder="Please Enter Mobile"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={phone}
          autoCapitalize={'none'}
          onChangeText={e => setPhone(e)}
        />
      </View>
      <View style={styles.inputFieldStyle}>
        <InputText
          mode="outlined"
          label="Address"
          placeholder="Please Enter Address"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={address}
          autoCapitalize={'none'}
          onChangeText={e => setAddress(e)}
        />
      </View>
      <View style={styles.inputFieldStyle}>
        <InputText
          mode="outlined"
          label="Country"
          placeholder="Please Enter Post"
          outlineStyle={styles.outLineStyles}
          underlineStyle={styles.underLineStyle}
          outlineColor={colors.BLACK}
          activeOutlineColor={colors.BLACK}
          textColor={colors.BLACK}
          contentStyle={styles.textInput}
          style={styles.inputField}
          value={country}
          autoCapitalize={'none'}
          onChangeText={e => setCountry(e)}
        />
      </View>
      <AppButton
        onPress={() => onSubmithandler()}
        btnStyle={{width: '100%', height: 40}}
        btnText="Submit"
      />
    </View>
  );
};

export default EditProfile;
