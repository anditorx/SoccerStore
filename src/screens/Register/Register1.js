import React, {createRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {colors, fonts, IC_NEXT_WHITE, IC_REGIS_1} from '../../res';
import {responsiveHeight} from '../../utils';
import {Button, Gap, HeaderRegister, Input} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const actionSheetRef = createRef();
const Register1 = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <KeyboardAwareScrollView ref={actionSheetRef}>
          {/* header */}
          <HeaderRegister
            type="register-1"
            illustration={<IC_REGIS_1 />}
            title1="Daftar"
            title2="Isi Data Diri Anda"
          />
          {/* form card */}
          <View style={styles.wrapperCardForm}>
            <Input label={'Nama'} height={responsiveHeight(46)} />
            <Input label={'Email'} height={responsiveHeight(46)} />
            <Input label={'No Handphone'} height={responsiveHeight(46)} />
            <Input label={'Password'} height={responsiveHeight(46)} password />
            <Gap height={30} />
            <Button
              text="Continue"
              icon={IC_NEXT_WHITE}
              onPress={() => navigation.navigate('Register2')}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Register1;

const styles = StyleSheet.create({
  safeAreaTop: {flex: 0, backgroundColor: colors.white},
  safeArea: {backgroundColor: colors.white, flex: 1},
  screen: {flex: 1, backgroundColor: colors.white},
  wrapperCardForm: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 35,
    padding: 25,
    borderWidth: 0.2,
    borderColor: colors.grey,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
});
