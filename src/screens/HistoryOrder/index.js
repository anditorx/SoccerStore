import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../components';
import {colors, DummiesOrders} from '../../res';

const HistoryOrder = () => {
  const [dataOrder, setDataOrder] = useState(DummiesOrders.DummiesOrders);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header type="back-and-title" text={'Riwayat Pemesanan'} />
      <View style={styles.content}>
        <List type={'history-order'} data={dataOrder} />
      </View>
    </SafeAreaView>
  );
};

export default HistoryOrder;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
