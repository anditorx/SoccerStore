import React, {useState, createRef, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, Input, Picker} from '../../components';
import {
  colors,
  IC_ArrowRight,
  IC_NEXT_WHITE,
  IC_ShoppingCartWhite,
  IL_CAMERA,
  IL_NO_AVATAR,
} from '../../res';
import {
  responsiveHeight,
  responsiveWidth,
  useForm,
  windowHeight,
} from '../../utils';
// lib
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// redux
import {useDispatch} from 'react-redux';
import {getCityList, getProvinceList, updateProfile} from '../../redux/actions';
import {useSelector} from 'react-redux';

const actionSheetRef = createRef();

const EditProfile = ({navigation, route}) => {
  const [dataProfile, setDataProfile] = useState(route?.params);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState('');
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  const [avatarForDB, setAvatarForDB] = useState('');
  console.tron.log('dataProfile', dataProfile);

  const {loading, dataProvince, dataCity} = useSelector(
    state => state.RajaOngkirReducer,
  );

  const [form, setForm] = useForm({
    province: dataProfile?.province,
    city: dataProfile?.city,
  });

  const formProfile = {
    name: dataProfile?.nama,
    email: dataProfile?.email,
    phone: dataProfile?.phone,
    address: dataProfile?.address,
  };

  // validation formik
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, 'Invalid Name')
      .required('Name is required!'),
    email: Yup.string().email('Invalid Email').required('Email is required!'),
    phone: Yup.string()
      .min(9, 'Invalid Phone Number')
      .required('Email is required!'),
    address: Yup.string()
      .trim()
      .min(10, 'Address is too short!')
      .required('Address is required!'),
  });

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

  const getImage = () => {
    const options = {
      quality: 1,
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: true,
      selectionLimit: 1,
      cameraType: 'front',
    };

    launchImageLibrary(options, response => {
      console.tron.log('response getImage', response);
      if (response.didCancel || response.error) {
        Alert.alert('Error', 'User cancelled image picker or error');
      } else {
        const source = {uri: response.assets[0].uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
        setAvatar(source);
        setAvatarUpdated(true);
        setAvatarForDB(fileString);
        // dispatch({type: ActionTypes.SET_PHOTO, value: dataImage});
        // dispatch({type: ActionTypes.SET_UPLOAD_STATUS, value: true});
      }
    });
  };

  const _handleSubmit = data => {
    dispatch(updateProfile(data, navigation));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header
        onPress={() => navigation.goBack()}
        type="back-and-title"
        text={'Edit Profile'}
      />
      {/* content */}
      <View style={styles.content}>
        <Formik
          initialValues={formProfile}
          validationSchema={validationSchema}
          onSubmit={(values, formikActions) => {
            const data = {
              uid: dataProfile?.uid,
              nama: values?.name,
              email: values?.email,
              phone: values?.phone,
              address: values.address,
              province: form.province,
              city: form.city,
              avatarUpdated: avatarUpdated,
              avatarForDB: avatarForDB,
            };
            console.tron.log('data update', data);

            _handleSubmit(data);
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
            const {name, email, phone, address} = values;
            return (
              <>
                <KeyboardAwareScrollView>
                  <View style={styles.wrapperHead}>
                    <TouchableOpacity
                      onPress={getImage}
                      style={styles.wrapperAvatar}>
                      <Image
                        source={avatar === '' ? IL_NO_AVATAR : avatar}
                        style={styles.image}
                      />
                      <View>
                        <Image
                          source={IL_CAMERA}
                          style={{
                            height: 40,
                            width: 40,
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Input
                    label="Nama"
                    width={'100%'}
                    height={responsiveHeight(45)}
                    fontSize={13}
                    value={name}
                    onChangeText={handleChange('name')}
                    error={touched.name && errors.name}
                    onBlur={handleBlur('name')}
                  />
                  <Input
                    label="Email"
                    width={'100%'}
                    height={responsiveHeight(45)}
                    fontSize={13}
                    value={email}
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email}
                    onBlur={handleBlur('email')}
                  />
                  <Input
                    label="No Handphone"
                    width={'100%'}
                    height={responsiveHeight(45)}
                    fontSize={13}
                    value={phone}
                    onChangeText={handleChange('phone')}
                    error={touched.phone && errors.phone}
                    onBlur={handleBlur('phone')}
                    keyboardType="number-pad"
                  />
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
                    height={responsiveHeight(45)}
                    fontSize={13}
                    value={form.province}
                    datas={dataProvince}
                    onSelected={handlePickerProvince}
                  />
                  <Picker
                    type="picker"
                    label="Kota / Kabupaten"
                    width={'100%'}
                    height={responsiveHeight(45)}
                    fontSize={13}
                    value={form.city}
                    datas={dataCity}
                    onSelected={handlePickerCity}
                  />
                  <Gap height={50} />
                  <Button
                    text="Simpan"
                    icon={IC_NEXT_WHITE}
                    fontSize={18}
                    // submiting={isSubmitting}
                    onPress={handleSubmit}
                  />
                  <Gap height={50} />
                </KeyboardAwareScrollView>
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.white, flex: 1},
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  wrapperHead: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 10,
  },
  wrapperAvatar: {
    height: 100,
    width: 100,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 7,
    borderColor: colors.primary,
  },
});
