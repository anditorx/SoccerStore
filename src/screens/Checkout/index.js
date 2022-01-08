import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  CardAddress,
  CardShoppingCart,
  Gap,
  Header,
  List,
  Picker,
} from '../../components';
import {colors, fonts, IC_ShoppingCartWhite} from '../../res';
import {DummiesOrders} from '../../res/dummies/orders';
import {
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
  windowHeight,
  windowWidth,
} from '../../utils';

const Checkout = ({navigation}) => {
  const [orders, setOrders] = useState(DummiesOrders[0]);
  const [expedition, setExpedition] = useState([]);
  console.tron.log('orders', orders);

  const _renderFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.totalHarga}>
          <Text style={styles.txtTotal}>Total Harga :</Text>
          <Text style={styles.txtTotal}>
            Rp {numberWithCommas(orders.totalHarga + 15000)}
          </Text>
        </View>
        <Button
          text="Bayar"
          icon={IC_ShoppingCartWhite}
          padding={responsiveHeight(15)}
          fontSize={18}
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {/* header */}
      <Header type="back-and-title" text={'Checkout'} />
      {/* content */}
      <View style={styles.screens}>
        <View style={styles.content}>
          <Text style={styles.textSectionLabel}>Apakah Benar Alamat ini ?</Text>
          <Gap height={15} />
          {/* card address */}
          <CardAddress />
          {/* total price */}
          <View style={styles.totalHarga}>
            <Text style={styles.txtTotal}>Total Harga :</Text>
            <Text style={styles.txtTotal}>
              Rp {numberWithCommas(orders.totalHarga)}
            </Text>
          </View>
          {/* select expedition */}
          <Picker
            expedition
            type="picker"
            label="Pilih Ekspedisi :"
            width={'100%'}
            height={responsiveHeight(46)}
            fontSize={13}
            datas={expedition}
          />
          <Gap height={25} />
          <Text style={styles.textSectionLabel}>Biaya Kirim</Text>
          <Gap height={10} />
          <View style={styles.textRow}>
            <Text style={styles.text}>Untuk Berat : {orders.berat} kg</Text>
            <Text style={styles.txtTotal}>Rp {numberWithCommas(15000)}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text}>Estimasi Tiba</Text>
            <Text style={styles.txtTotal}>2 - 3 hari</Text>
          </View>
          <Gap height={15} />
        </View>
      </View>
      {/* footer */}
      {_renderFooter()}
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  screen: {
    flex: 1,
  },
  screens: {
    backgroundColor: 'white',
    flex: 1,
    // height: windowHeight,
    // width: windowWidth,
  },
  content: {
    padding: 20,
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
    marginTop: 15,
  },
  txtTotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textSectionLabel: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 16,
  },
});
