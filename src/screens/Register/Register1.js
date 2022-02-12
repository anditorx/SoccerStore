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
import {responsiveHeight, useForm} from '../../utils';
import {Button, Gap, HeaderRegister, Input} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';

const actionSheetRef = createRef();

const Register1 = ({navigation}) => {
  const form = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, 'Invalid Name')
      .required('Name is required!'),
    email: Yup.string().email('Invalid Email').required('Email is required!'),
    phone: Yup.string()
      .min(9, 'Invalid Phone Number')
      .required('Email is required!'),
    password: Yup.string()
      .trim()
      .min(4, 'Passwrod is too short!')
      .required('Password is required!'),
    // confirmPassword: Yup.string().equals(
    //   [Yup.ref('password'), null],
    //   'Password does not match!',
    // ),
  });

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <KeyboardAwareScrollView
          ref={actionSheetRef}
          validationSchema={validationSchema}>
          {/* header */}
          <HeaderRegister
            type="register-1"
            illustration={<IC_REGIS_1 />}
            title1="Daftar"
            title2="Isi Data Diri Anda"
          />
          {/* form card */}
          <View style={styles.wrapperCardForm}>
            <Formik
              initialValues={form}
              validationSchema={validationSchema}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  console.tron.log('values', values);
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                }, 3000);
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
                const {name, email, phone, password} = values;
                return (
                  <>
                    <Input
                      label={'Nama'}
                      value={name}
                      error={touched.name && errors.name}
                      height={responsiveHeight(46)}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                    />
                    <Input
                      label={'Email'}
                      value={email}
                      height={responsiveHeight(46)}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      error={touched.email && errors.email}
                    />
                    <Input
                      label={'No Handphone'}
                      value={phone}
                      height={responsiveHeight(46)}
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      error={touched.phone && errors.phone}
                    />
                    <Input
                      label={'Password'}
                      value={password}
                      height={responsiveHeight(46)}
                      password
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      error={touched.password && errors.password}
                    />
                    <Gap height={30} />
                    <Button
                      submiting={isSubmitting}
                      text="Continue"
                      icon={IC_NEXT_WHITE}
                      onPress={handleSubmit}
                    />
                  </>
                );
              }}
            </Formik>
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
