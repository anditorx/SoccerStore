import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Header, Input, Picker} from '../../components';
import {
  colors,
  IC_ArrowRight,
  IC_NEXT_WHITE,
  IC_ShoppingCartWhite,
  IL_CAMERA,
} from '../../res';
import {responsiveHeight, responsiveWidth, windowHeight} from '../../utils';

const EditProfile = ({navigation, route}) => {
  const [dataProfile, setDataProfile] = useState(route?.params);
  console.tron.log('dataParams', dataProfile);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header type="back-and-title" text={'Edit Profile'} />
      {/* content */}
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.wrapperHead}>
            <TouchableOpacity style={styles.wrapperAvatar}>
              <Image source={dataProfile.avatar} style={styles.image} />
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
            value={dataProfile.nama}
          />
          <Input
            label="Email"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            value={dataProfile.email}
          />
          <Input
            label="No Handphone"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            value={dataProfile.nomerHp}
          />
          <Input
            type="textarea"
            label="Alamat"
            fontSize={13}
            value={dataProfile.alamat}
          />
          <Picker
            type="picker"
            label="Provinsi"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            // datas={dataParam.ukuran}
          />
          <Picker
            type="picker"
            label="Kota / Kabupaten"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            // datas={dataParam.ukuran}
          />
        </ScrollView>
        <Button
          text="Simpan"
          icon={IC_NEXT_WHITE}
          fontSize={18}
          // onPress={() => navigation.navigate('Update')}
        />
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
    // backgroundColor: 'yellow',
    height: 100,
    width: 100,
  },

  image: {height: 100, width: 100, borderRadius: 100 / 2},
});
