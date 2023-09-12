import React from 'react';
import {TextInput} from 'react-native-paper';
const InputText = ({
  placeholder,
  value,
  label,
  mode,
  onChangeText,
  ...otherProps
}) => {
  return (
    <TextInput
      label={label}
      mode={mode}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      {...otherProps}
    />
  );
};

export default InputText;
