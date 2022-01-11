import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {colors, fonts, IC_CloseRed} from '../../../res';
import {
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

const CardHistoryOrder = ({data}) => {
  console.tron.log('dataOrder', data);
  return (
    <View style={styles.container}>
      <Text style={styles.textDate}>{data.tanggalPemesanan}</Text>
      {data.pesanans.map((item, index) => {
        return (
          <View key={index} style={styles.viewHistory}>
            <Text>{index + 1}.</Text>
            <Image source={item.product.gambar[0]} style={styles.imgJersey} />
            <View style={styles.desc}>
              <Text style={styles.textBold}>{item.product.nama}</Text>
              <Text>Harga: Rp {numberWithCommas(item.product.harga)}</Text>
              <Gap height={10} />
              <Text>Jumlah: {item.jumlahPesan}</Text>
              <Text>Total Harga: Rp {numberWithCommas(item.totalHarga)}</Text>
            </View>
          </View>
        );
      })}
      <View style={{marginTop: 10}}>
        <View style={styles.wrapperFooter}>
          <View style={styles.label}>
            <Text style={styles.textBoldFooter}>Status : </Text>
            <Text style={styles.textBoldFooter}>ONGKIR (2-3 HARI): </Text>
            <Text style={styles.textBoldFooter}>Total Harga : </Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.textBoldFooter}>{data.status}</Text>
            <Text style={styles.textBoldFooter}>
              Rp {numberWithCommas(15000)}
            </Text>
            <Text style={styles.textBoldFooter}>
              Rp {numberWithCommas(data.totalHarga)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardHistoryOrder;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: responsiveHeight(20),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginBottom: 15,
  },
  viewHistory: {
    flexDirection: 'row',
    marginTop: 15,
  },
  imgJersey: {
    height: responsiveHeight(66),
    width: responsiveWidth(66),
  },
  textDate: {
    fontFamily: fonts.SemiBold,
  },
  textBold: {
    fontFamily: fonts.SemiBold,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  textBoldFooter: {
    fontFamily: fonts.SemiBold,
    textTransform: 'uppercase',
    textAlign: 'right',
    color: colors.primary,
  },
  wrapperItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperFooter: {
    flexDirection: 'row',
  },
  label: {flex: 1},
});
