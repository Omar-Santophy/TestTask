import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ModalComp = ({onCancel, modalVisible, item}) => {
  console.log(modalVisible, '...modal');
  console.log(item?.text, '.......item');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View>
              <Text style={styles.cardUserComment}>{item?.text}</Text>
              <Image
                source={{uri: item?.image}}
                style={styles.cardUserPostImage}
              />
            </View>
            <View style={styles.cardReactInfo}>
              <View style={styles.cardInnerReactInfo}>
                <TouchableOpacity style={styles.buttonLikeStyle}>
                  <AntDesign name={'like2'} size={25} />
                  <Text>{item?.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCommentStyle}>
                  <FontAwesome name={'comment-o'} size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => onCancel()} // Use onCancel to close the modal
            style={[styles.button, styles.buttonClose]}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;
