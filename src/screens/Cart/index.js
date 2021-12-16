import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CardShoppingCart, Header, List} from '../../components';
import {colors} from '../../res';
import {DummiesOrders} from '../../res/dummies/orders';
import {windowHeight, windowWidth} from '../../utils';

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
});
