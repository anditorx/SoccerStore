import React, {useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// components
import {colors, IC_LogoBig, IL_PlayFootball, LOTTIE_Player01} from '../../res';
import {Button, Gap, Input} from '../../components';
import {responsiveHeight} from '../../utils';
// lib
import LottieView from 'lottie-react-native';
// styling
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperLogo}>
          <IC_LogoBig />
        </View>
        <View style={styles.wrapperFormLogin}>
          <Input label="Email" height={responsiveHeight(50)} />
          <Input label="Password" password height={responsiveHeight(50)} />
          <Gap height={25} />
          <Button text="Login" type="text-only" />
        </View>
        <View style={styles.wrapperRegister}>
          <Text>Belum punya akun?</Text>
          <Gap width={5} />
          <TouchableOpacity onPress={() => navigation.navigate('Register1')}>
            <Text style={styles.textUnderline}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.wrapperLottie}>
        <LottieView
          source={LOTTIE_Player01}
          autoPlay
          loop
          style={{height: 150}}
        />
      </View>
    </View>
  );
};

export default Login;
