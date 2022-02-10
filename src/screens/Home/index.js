import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BannerSlider, Gap, Header, List} from '../../components';
import {colors, fonts} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {DummiesJersey} from '../../res/dummies/jersey';
import {windowHeight, windowWidth} from '../../utils';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <Header />
        <BannerSlider />
        <View style={styles.content}>
          <View style={styles.wrapperLiga}>
            <Text style={styles.titleLiga}>Pilih Liga</Text>
            <List type="liga" data={Liga} />
          </View>
          <View style={styles.wrapperJersey}>
            <View style={styles.wrapperJerseyHeaad}>
              <Text style={styles.titleJersey}>Pilih Jersey</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <List type="jersey" data={DummiesJersey} navigation={navigation} />
          </View>
          <Gap height={100} />
        </View>
      </ScrollView>
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
