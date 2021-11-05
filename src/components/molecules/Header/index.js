import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ShoppingCart} from '..';
import {Gap} from '../..';
import {colors, IC_Search, IC_ShoppingCart} from '../../../res';
import {responsiveHeight, windowWidth} from '../../../utils/responsive';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.sectionSearch}>
          <IC_Search />
          <TextInput placeholder="Cari Jersey . . . " style={styles.input} />
        </View>
        <Gap width={20} />
        <View style={styles.sectionCart}>
          <ShoppingCart value={1} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(125),
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionSearch: {
    backgroundColor: colors.white,
    flex: 1,
    height: 40,
    borderRadius: 25,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
  sectionCart: {justifyContent: 'center', alignItems: 'center'},
});
