import {Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../screens/profile/styles';
import ModalComp from '../modal/ModalComp';

const ItemImages = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={() => showModal()} style={styles.gridItem}>
        <Image source={{uri: item?.image}} style={styles.image} />
      </TouchableOpacity>
      <ModalComp
        item={item}
        modalVisible={modalVisible}
        onCancel={hideModal}
        setModalVisible={setModalVisible}
        onRequestClose={modalVisible}
      />
    </>
  );
};

export default ItemImages;
