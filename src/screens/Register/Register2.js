import React, {createRef, useEffect, useState} from 'react';
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
import {
  Button,
  Gap,
  HeaderRegister,
  Input,
  Loading,
  Picker,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {getCityList, getProvinceList} from '../../redux/actions';

const actionSheetRef = createRef();

const Register2 = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, dataProvince, dataCity} = useSelector(
    state => state.RajaOngkirReducer,
  );

  // const [dataProvince, setDataProvince] = useState(
  //   DummiesProvince.DummiesProvince,
  // );

  useEffect(() => {
    dispatch(getProvinceList());
  }, [dispatch]);

  const handlePickerProvince = option => {
    dispatch(getCityList(option.key));
  };
  const handlePickerCity = option => {
    dispatch(getCityList(option.key));
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <KeyboardAwareScrollView ref={actionSheetRef}>
          {loading && <Loading />}
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
              onSelected={handlePickerProvince}
            />
            <Picker
              type="picker"
              label="Kabupaten"
              width={'100%'}
              height={responsiveHeight(46)}
              fontSize={18}
              datas={dataCity}
              onSelected={handlePickerCity}
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
