import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// components
import {IC_LogoBig, IL_PlayFootball, LOTTIE_Player01} from '../../res';
// lib
import LottieView from 'lottie-react-native';
// styling
import styles from './styles';
import {getDataStorage} from '../../utils';
import {CONSTANT} from '../../constant';

const Splash = ({navigation}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    getDataUser();

    setTimeout(() => {
      if (active) {
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      } else {
        navigation.reset({index: 0, routes: [{name: 'Login'}]});
      }
    }, 2000);
  }, [active, getDataUser, navigation]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataUser = () => {
    getDataStorage(CONSTANT.STORAGE_DATAUSER)
      .then(res => {
        const data = res;
        if (data) {
          setActive(true);
        }
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        // error
      });
  };

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
