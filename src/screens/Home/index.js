import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BannerSlider, Gap, Header, List, Loading} from '../../components';
import {colors, fonts} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {DummiesJersey} from '../../res/dummies/jersey';
import {windowHeight, windowWidth} from '../../utils';
// redux
import {connect, useDispatch, useSelector} from 'react-redux';
import {doGetListJersey, doGetListLiga, getUser} from '../../redux/actions';

import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {dataUser} = useSelector(state => state.UserReducer);
  const {loadingJersey} = useSelector(state => state.JerseyReducer);
  useEffect(() => {
    dispatch(getUser());
    dispatch(doGetListLiga());
    dispatch(doGetListJersey());
  }, [dispatch]);

  useEffect(() => {
    isFocused && dispatch(doGetListJersey());
  }, [dispatch, isFocused]);

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <Header page={'HOME'} navigation={navigation} />
        <BannerSlider />
        <View style={styles.content}>
          <View style={styles.wrapperLiga}>
            <Text style={styles.titleLiga}>Pilih Liga</Text>
            <List type="liga" navigation={navigation} />
          </View>
          <View style={styles.wrapperJersey}>
            <View style={styles.wrapperJerseyHeaad}>
              <Text style={styles.titleJersey}>Pilih Jersey</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <List type="jersey-home" navigation={navigation} />
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

export default Home;

const styles = StyleSheet.create({
  safeAreaTop: {flex: 0, backgroundColor: colors.primary},
  safeArea: {backgroundColor: colors.white, flex: 1},
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperLiga: {
    padding: 20,
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
  textSeeAll: {
    fontSize: 14,
    fontFamily: fonts.Regular,
  },
  wrapperJerseyHeaad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
