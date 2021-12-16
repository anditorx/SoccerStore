import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BannerSlider, Gap, Header, List} from '../../components';
import {colors, fonts} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {DummiesJersey} from '../../res/dummies/jersey';
import {windowHeight} from '../../utils/responsive';

const Jersey = ({navigation}) => {
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
            <Text style={styles.titleLiga}>Pilih Liga</Text>
            <List type="liga" data={Liga} />
          </View>
          <View style={styles.wrapperJersey}>
            <Text style={styles.titleJersey}>Pilih Jersey</Text>
            <List type="jersey" data={DummiesJersey} navigation={navigation} />
          </View>
          <Gap height={100} />
        </View>
      </ScrollView>
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
  scrollView: {backgroundColor: colors.white},
});
