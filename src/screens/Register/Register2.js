import React, {createRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  colors,
  DummiesProvince,
  fonts,
  IC_NEXT_WHITE,
  IC_REGIS_2,
} from '../../res';
import {responsiveHeight, responsiveWidth} from '../../utils';
import {Button, Gap, HeaderRegister, Input, Picker} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';

const actionSheetRef = createRef();

const Register2 = ({navigation}) => {
  const [dataProvince, setDataProvince] = useState(
    DummiesProvince.DummiesProvince,
  );
  console.tron.log('dataProvince', dataProvince);
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <KeyboardAwareScrollView ref={actionSheetRef}>
          {/* header */}
          <HeaderRegister
            type="register-2"
            illustration={<IC_REGIS_2 />}
            title1="Isi Alamat"
            title2="Lengkap Anda"
          />
          {/* form card */}
          <View style={styles.wrapperCardForm}>
            <Input label={'Alamat'} type={'textarea'} />
            <Picker
              type="picker"
              label="Provinsi"
              width={'100%'}
              height={responsiveHeight(46)}
              fontSize={18}
              datas={dataProvince}
            />
            <Picker
              type="picker"
              label="Kabupaten"
              width={'100%'}
              height={responsiveHeight(46)}
              fontSize={18}
              // datas={dataParam.ukuran}
            />
            <Gap height={30} />
            <Button
              text="Continue"
              icon={IC_NEXT_WHITE}
              onPress={() => navigation.navigate('MainApp')}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Register2;

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
