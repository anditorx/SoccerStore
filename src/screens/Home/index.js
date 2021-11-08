import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {BannerSlider, Header} from '../../components';
import {colors} from '../../res';
import {windowHeight} from '../../utils/responsive';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={styles.content}>
        <BannerSlider />
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
});
