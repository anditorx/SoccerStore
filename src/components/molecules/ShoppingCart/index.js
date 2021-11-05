import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, IC_ShoppingCart} from '../../../res';

const ShoppingCart = ({value}) => {
  return (
    <TouchableOpacity style={styles.wrapperIconCart}>
      <IC_ShoppingCart />
      {value && value !== 0 ? (
        <View style={styles.wrapperCount}>
          <Text style={styles.text}>{value}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  wrapperIconCart: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  wrapperCount: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
