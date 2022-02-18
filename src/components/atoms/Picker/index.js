import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import {colors, fonts} from '../../../res';

const Picker = ({
  expedition,
  fontSize,
  datas,
  label,
  height,
  width,
  onSelected,
  value,
}) => {
  const [sizeJersey, setSizeJersey] = useState(null);
  const [textInputValue, setTextInputValue] = useState(
    value !== '' ? value : '',
  );

  const _renderModal = () => {
    const data = [];
    const dataProvince = [];
    const dataCity = [];

    if (datas) {
      if (label === 'Provinsi') {
        datas.map(item => {
          dataProvince.push({key: item.province_id, label: item.province});
        });
      }
      if (label === 'Kabupaten') {
        datas.map(item => {
          dataCity.push({key: item.city_id, label: item.city_name});
        });
      } else {
        datas.map((item, index) => {
          data.push({key: index++, label: item});
        });
      }
    }

    const handleChange = option => {
      onSelected(option);
      setTextInputValue(option.label);
    };

    if (label == 'Provinsi') {
      return (
        <ModalSelector
          data={dataProvince}
          initValue="Select something yummy!"
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={option => handleChange(option)}>
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
            placeholder={`Pilih ${label}`}
            value={textInputValue}
          />
        </ModalSelector>
      );
    }
    if (label == 'Kabupaten') {
      return (
        <ModalSelector
          data={dataCity}
          initValue="Select something yummy!"
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={option => handleChange(option)}>
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
            placeholder={`Pilih ${label}`}
            value={textInputValue}
          />
        </ModalSelector>
      );
    }

    return (
      <ModalSelector
        data={data}
        initValue="Select something yummy!"
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        cancelButtonAccessibilityLabel={'Cancel Button'}
        onChange={option => handleChange(option)}>
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
          placeholder={`Pilih ${label}`}
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
