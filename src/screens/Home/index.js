import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import {colors} from '../../res';
import {windowHeight} from '../../utils/responsive';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.primary, flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>HEllo</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
