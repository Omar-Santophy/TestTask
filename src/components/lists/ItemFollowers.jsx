import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/folllowers/styles';
import {follow} from '../../redux/slices/auth.slices';
import AppButton from '../../components/button/AppButton';
const ItemFollowers = ({item}) => {
  return (
    <View style={styles.followersContainer}>
      <View onPress={() => {}}>
        <View>
          <Image source={{uri: item.picture}} style={styles.userImage} />

          <Text style={styles.titleName}>
            {item?.owner?.title.toUpperCase() +
              '.' +
              ' ' +
              item?.owner?.firstName +
              ' ' +
              item?.owner?.lastName}
          </Text>
        </View>
      </View>
      <AppButton
        onPress={() => {
          dispatch(follow({id: item.id}));
        }}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        btnText="Follow"
      />
    </View>
  );
};

export default ItemFollowers;
