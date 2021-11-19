import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../res';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';

const CardLiga = ({data}) => {
  return (
    <TouchableOpacity style={styles.wrapperImgLiga}>
      <Image source={data.image} style={styles.imgLiga} />
    </TouchableOpacity>
  );
};

export default CardLiga;

const styles = StyleSheet.create({
  wrapperImgLiga: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imgLiga: {
    height: responsiveHeight(70),
    width: responsiveWidth(57),
  },
});
