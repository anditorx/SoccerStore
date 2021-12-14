import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View, ActionSheetIOS} from 'react-native';
import {colors, fonts} from '../../../res';

const Input = ({type, label, height, width, fontSize, placeholder}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [data, setData] = useState(null);

  if (type === 'textarea') {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label}</Text>
        <TextInput
          style={styles.inputTextArea(fontSize)}
          placeholder={placeholder}
          multiline
          numberOfLines={4}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label}</Text>
      <TextInput
        style={styles.input(fontSize, width, height)}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.Regular,
  }),
  input: (fontSize, width, height) => ({
    width: width ? width : '100%',
    height: height ? height : 33,
    fontSize: fontSize ? fontSize : 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingLeft: 10,
  }),
  inputTextArea: fontSize => ({
    // width: '100%',
    height: 70,
    fontSize: fontSize ? fontSize : 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingLeft: 10,
    textAlignVertical: 'top',
  }),
});
