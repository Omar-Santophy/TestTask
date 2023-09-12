import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from 'react-native-size-matters';
const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={colors.BLACK} />
          <Text
            style={{
              marginLeft: moderateScale(40),
              fontSize: 16,
              marginHorizontal: moderateScale(20),
            }}>
            Loading .....
          </Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: 'white',
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loader;
