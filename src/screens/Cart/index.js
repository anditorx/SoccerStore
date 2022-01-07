import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, CardShoppingCart, Header, List} from '../../components';
import {colors, IC_ShoppingCartWhite} from '../../res';
import {DummiesOrders} from '../../res/dummies/orders';
import {
  numberWithCommas,
  responsiveHeight,
  windowHeight,
  windowWidth,
} from '../../utils';

const Cart = () => {
  const [orders, setOrders] = useState(DummiesOrders[0]);
  console.tron.log('orders', orders);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header type="back-and-title" text={'Cart'} />
      <View style={styles.content}>
        <List type="cart-list" data={orders.pesanans} />
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.totalHarga}>
          <Text style={styles.txtTotal}>Total Harga :</Text>
          <Text style={styles.txtTotal}>
            Rp {numberWithCommas(orders.totalHarga)}
          </Text>
        </View>
        <Button
          text="Checkout"
          icon={IC_ShoppingCartWhite}
          padding={responsiveHeight(15)}
          fontSize={18}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  screen: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    // height: windowHeight,
    // width: windowWidth,
  },
  footer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    paddingBottom: 20,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  txtTotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
