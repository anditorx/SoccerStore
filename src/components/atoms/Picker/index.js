import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import {colors, fonts} from '../../../res';

const Picker = ({fontSize, datas, label, height, width}) => {
  const [sizeJersey, setSizeJersey] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');

  const _renderModal = () => {
    const data = [];

    if (datas) {
      datas.map((item, index) => {
        data.push({key: index++, label: item});
      });
    }

    return (
      <ModalSelector
        data={data}
        initValue="Select something yummy!"
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        cancelButtonAccessibilityLabel={'Cancel Button'}
        onChange={option => {
          setTextInputValue(option.label);
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            height: height,
            width: width,
            borderRadius: 5,
            borderColor: colors.border,
          }}
          editable={false}
          placeholder="Pilih Ukuran"
          value={textInputValue}
        />
      </ModalSelector>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label}</Text>
      {_renderModal()}
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.Regular,
  }),
});
