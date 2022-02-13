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
import {responsiveHeight, responsiveWidth, useForm} from '../../utils';
import {
  Button,
  Gap,
  HeaderRegister,
  Input,
  Loading,
  Picker,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {getCityList, getProvinceList, registerUser} from '../../redux/actions';

const actionSheetRef = createRef();

const Register2 = ({navigation, route}) => {
  const dispatch = useDispatch();
  const dataParams = route?.params;

  const [form, setForm] = useForm({
    province: '',
    city: '',
  });
  const formAddress = {
    address: '',
  };

  // validation formik
  const validationSchema = Yup.object({
    address: Yup.string()
      .trim()
      .min(10, 'Address is too short!')
      .required('Address is required!'),
  });

  const {loading, dataProvince, dataCity} = useSelector(
    state => state.RajaOngkirReducer,
  );

  const {loadingAuth, dataUser, error, errorMessage, successAuth} = useSelector(
    state => state.AuthReducer,
  );

  useEffect(() => {
    dispatch(getProvinceList());
  }, [dispatch]);

  const handlePickerProvince = option => {
    setForm('province', option.label);
    dispatch(getCityList(option.key));
  };
  const handlePickerCity = option => {
    setForm('city', option.label);
    dispatch(getCityList(option.key));
  };

  const handleSubmit = data => {
    dispatch(registerUser(data, dataParams?.password, navigation));
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <KeyboardAwareScrollView ref={actionSheetRef}>
          {loading && <Loading />}
          {loadingAuth && <Loading />}
          {/* header */}
          <HeaderRegister
            type="register-2"
            illustration={<IC_REGIS_2 />}
            title1="Isi Alamat"
            title2="Lengkap Anda"
          />

          {/* form card */}
          <View style={styles.wrapperCardForm}>
            <Formik
              initialValues={formAddress}
              validationSchema={validationSchema}
              onSubmit={(values, formikActions) => {
                const data = {
                  nama: dataParams?.name,
                  email: dataParams?.email,
                  phone: dataParams?.phone,
                  address: values.address,
                  province: form.province,
                  city: form.city,
                };

                handleSubmit(data);
                // setTimeout(() => {
                //   formikActions.resetForm();
                //   formikActions.setSubmitting(false);
                // }, 5000);
              }}>
              {({
                values,
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => {
                const {address} = values;
                return (
                  <>
                    <Input
                      label={'Alamat'}
                      type={'textarea'}
                      value={address}
                      onChangeText={handleChange('address')}
                      error={touched.address && errors.address}
                      onBlur={handleBlur('address')}
                    />
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
                      submiting={isSubmitting}
                      onPress={handleSubmit}
                    />
                  </>
                );
              }}
            </Formik>
            {/*  */}
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
