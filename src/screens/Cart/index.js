import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  CardShoppingCart,
  Header,
  List,
  Loading,
} from '../../components';
import {CONSTANT} from '../../constant';
import {doDeleteCartItem, doGetCartList} from '../../redux/actions';
import {colors, IC_ShoppingCartWhite} from '../../res';
import {DummiesOrders} from '../../res/dummies/orders';
import {
  getDataStorage,
  numberWithCommas,
  responsiveHeight,
  windowHeight,
  windowWidth,
} from '../../utils';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(DummiesOrders[0]);
  const [dataProfile, setDataProfile] = useState('');
  const {dataCart, loadingCart} = useSelector(state => state.CartReducer);
  useEffect(() => {
    getCartList();
  }, [getCartList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCartList = () => {
    getDataStorage(CONSTANT.STORAGE_DATAUSER)
      .then(res => {
        const data = res;
        if (data) {
          setDataProfile(data);
          dispatch(doGetCartList(data.uid, navigation));
        }
      })
      .catch(err => {
        // error
        navigation.replace('Login');
      });
  };

  const _renderFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.totalHarga}>
          <Text style={styles.txtTotal}>Total Harga :</Text>
          {dataCart?.totalHarga ? (
            <Text style={styles.txtTotal}>
              Rp {numberWithCommas(dataCart.totalHarga)}
            </Text>
          ) : (
            <Text style={styles.txtTotal}>Rp 0</Text>
          )}
        </View>
        <Button
          text="Checkout"
          icon={IC_ShoppingCartWhite}
          padding={responsiveHeight(15)}
          fontSize={18}
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    );
  };

  const _handleDeleteItem = item => {
    console.tron.log('🚀 ~ dataCart :=>', dataCart);
    console.tron.log('🚀 ~ delete data :=>', item);
    // dispatch(doDeleteCartItem())
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header type="back-and-title" text={'Cart'} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataCart ? (
            // <List type="cart-list" data={dataCart} />
            Object.keys(dataCart?.pesanans).map(key => {
              // return <CardShoppingCart data={data.pesanans[key]} key={key} />;
              return (
                <List
                  type="cart-list"
                  data={dataCart?.pesanans[key]}
                  onPressDelete={() =>
                    _handleDeleteItem(dataCart?.pesanans[key])
                  }
                />
              );
            })
          ) : (
            <View style={styles.wrapperNoDataAvailable}>
              <Text>Tidak ada data</Text>
            </View>
          )}
        </ScrollView>
      </View>
      {/* footer */}
      {dataCart && dataCart !== [] ? _renderFooter() : null}
      {/* loading */}
      {loadingCart && (
        <View style={styles.wrapperLoading}>
          <Loading />
        </View>
      )}
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
  wrapperNoDataAvailable: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  wrapperLoading: {position: 'absolute', marginTop: 50},
});
