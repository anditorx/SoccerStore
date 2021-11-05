import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
// components
import {IC_LogoBig, IL_PlayFootball, LOTTIE_Player01} from '../../res';
// lib
import LottieView from 'lottie-react-native';
// styling
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <IC_LogoBig />
      <View style={styles.wrapperLottie}>
        <LottieView source={LOTTIE_Player01} autoPlay loop />
      </View>
    </View>
  );
};

export default Splash;
