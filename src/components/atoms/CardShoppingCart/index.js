import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {colors, fonts, IC_CloseRed} from '../../../res';
import {
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

const CardShoppingCart = ({data, onPressDelete}) => {
  const _handleDeleteItem = () => {
    console.tron.log('🚀 ~ delete data :=>', data);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: data.product.gambar[0]}} style={styles.image} />
      <View style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontFamily: fonts.Bold}}>{data.product.nama}</Text>
        <Text>Harga: Rp{numberWithCommas(data.product.harga)}</Text>
        <Gap height={10} />
        <Text>Pesan: {data.jumlahPesan}</Text>
        <Text>Ukuran: {data.ukuran}</Text>
        <Text>Total Harga: Rp{numberWithCommas(data.totalHarga)}</Text>
        <Text>Keterangan: {data.keterangan}</Text>
      </View>
      <TouchableOpacity style={styles.viewDelete} onPress={onPressDelete}>
        <IC_CloseRed />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CardShoppingCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: responsiveHeight(23),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: responsiveHeight(88),
    width: responsiveWidth(88),
    resizeMode: 'contain',
  },
  viewDelete: {
    justifyContent: 'flex-end',
  },
});
