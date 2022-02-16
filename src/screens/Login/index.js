import React, {useEffect, createRef} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// components
import {colors, IC_LogoBig, IL_PlayFootball, LOTTIE_Player01} from '../../res';
import {Button, Gap, Input} from '../../components';
import {responsiveHeight} from '../../utils';
// lib
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
// styling
import styles from './styles';
import {loginUser} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const actionSheetRef = createRef();

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const form = {
    email: '',
    password: '',
  };

  // validation formik
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required!'),
    password: Yup.string()
      .trim()
      .min(4, 'Password is too short!')
      .required('Password is required!'),
    // confirmPassword: Yup.string().equals(
    //   [Yup.ref('password'), null],
    //   'Password does not match!',
    // ),
  });

  const handleSubmit = data => {
    dispatch(loginUser(data, navigation));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperLogo}>
          <IC_LogoBig />
        </View>
        <View style={styles.wrapperFormLogin}>
          <Formik
            initialValues={form}
            validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {
              const data = {
                email: values.email,
                password: values.password,
              };
              setTimeout(() => {
                handleSubmit(data);
                // formikActions.resetForm();
                formikActions.setSubmitting(false);
              }, 5000);
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
              const {email, password} = values;
              return (
                <>
                  <Input
                    label={'Email'}
                    value={email}
                    height={responsiveHeight(50)}
                    error={touched.email && errors.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <Input
                    label={'Password'}
                    value={password}
                    // password
                    height={responsiveHeight(50)}
                    error={touched.password && errors.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />

                  <Gap height={25} />
                  <Button
                    text="Login"
                    type="text-only"
                    submiting={isSubmitting}
                    onPress={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
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
