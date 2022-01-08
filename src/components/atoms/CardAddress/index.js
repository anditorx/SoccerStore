import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {colors, fonts} from '../../../res';

const CardAddress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alamat Saya</Text>
      <Gap height={10} />
      <Text style={styles.desc}>
        Jl. Menoreh Tengah X/22 Sampangan Gajah Mungkur Kota Semarang Provinsi
        Jawa Tengah
      </Text>
      <Gap height={20} />
      <TouchableOpacity>
        <Text style={styles.textButton}>Ubah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 10,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    padding: 15,
  },
  title: {
    fontFamily: fonts.Bold,
    fontSize: 14,
  },
  desc: {
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
  textButton: {
    textAlign: 'right',
    color: colors.blueSecondary,
    fontFamily: fonts.Bold,
    fontSize: 14,
  },
});
