import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BannerSlider, Gap, Header, List, Loading} from '../../components';
import {colors, fonts} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {DummiesJersey} from '../../res/dummies/jersey';
import {windowHeight} from '../../utils/responsive';
import {doGetListJersey} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const Jersey = ({navigation, route}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {loadingJersey, idLiga, namaLiga} = useSelector(
    state => state.JerseyReducer,
  );

  useEffect(() => {
    idLiga ? dispatch(doGetListJersey(idLiga)) : dispatch(doGetListJersey());
  }, [dispatch, idLiga]);

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Header />
        <View style={styles.content}>
          <View style={styles.wrapperLiga}>
            <List type="liga" />
          </View>
          <View style={styles.wrapperJersey}>
            <Text style={styles.titleJersey}>
              Pilih
              <Text style={styles.txtBold}> Jersey </Text>
              {idLiga ? namaLiga : 'Yang Anda Inginkan'}
            </Text>
            <List type="jersey" navigation={navigation} />
          </View>
          <Gap height={100} />
        </View>
      </ScrollView>
      {loadingJersey && (
        <View style={{position: 'absolute', marginTop: 50}}>
          <Loading />
        </View>
      )}
    </>
  );
};

export default Jersey;

const styles = StyleSheet.create({
  safeAreaTop: {flex: 0, backgroundColor: colors.primary},
  safeArea: {flex: 1, backgroundColor: colors.transparent},
  screen: {
    flex: 1,
  },
  content: {flex: 1, backgroundColor: colors.transparent},
  wrapperLiga: {
    paddingHorizontal: 20,
  },
  titleLiga: {
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
  wrapperJersey: {
    padding: 20,
  },
  titleJersey: {
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
  scrollView: {backgroundColor: colors.white},
  txtBold: {fontWeight: 'bold'},
});
