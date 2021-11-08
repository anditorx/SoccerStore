import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {BannerSlider, Header, List} from '../../components';
import {colors, fonts} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {windowHeight} from '../../utils/responsive';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={styles.content}>
        <BannerSlider />
        <View style={styles.wrapperLiga}>
          <Text style={styles.titleLiga}>Pilih Liga</Text>
          <List type="liga" data={Liga} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.primary, flex: 1},
  screen: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  content: {flex: 1, backgroundColor: 'white'},
  wrapperLiga: {
    padding: 20,
  },
  titleLiga: {
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
});
