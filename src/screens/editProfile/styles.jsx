import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_name: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10.8,
  },
  ImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  IconStyle: {
    height: 30,
    width: 30,
    position: 'absolute',
    bottom: 0,
    left: 12,
  },
  errorStyle: {
    fontSize: 10,
    color: 'red',
    marginTop: 5,
  },

  inputContainer: {
    marginHorizontal: 10,
    marginTop: 51.55,
  },
  marginStyle: {
    width: '90%',
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 12,
  },

  //==============Button Styled==========================
  BtnContainer: {
    alignItems: 'center',
    marginTop: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
  },
  //===============INPUT FIELD STYLE=====================
  inputField: {
    fontSize: 14,
    backgroundColor: colors.WHITE,
    width: '90%',
  },
  outLineStyles: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.BLACK,
  },
  underLineStyle: {
    borderRadius: 8,
    borderWidth: 0.5,
  },
  textInput: {
    color: colors.BLACK,
    fontSize: 10,
  },
});
