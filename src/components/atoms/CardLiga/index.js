import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {doGetJerseyByLiga} from '../../../redux/actions';
import {colors} from '../../../res';
import {navigate} from '../../../utils';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

const CardLiga = ({dataLiga, id}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const toJerseyByLiga = (id, namaLiga) => {
    dispatch(doGetJerseyByLiga(id, namaLiga));
    navigation.navigate('Jersey');
    // navigate('Jersey');
  };
  return (
    <TouchableOpacity
      style={styles.wrapperImgLiga}
      onPress={() => toJerseyByLiga(id, dataLiga.namaLiga)}>
      <Image source={{uri: dataLiga.image}} style={styles.imgLiga} />
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
