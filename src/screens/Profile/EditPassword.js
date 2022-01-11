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

const EditPassword = ({navigation, route}) => {
  const [dataProfile, setDataProfile] = useState(route?.params);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header type="back-and-title" text={'Edit Password'} />
      {/* content */}
      <View style={styles.content}>
        <ScrollView>
          <Input
            label="Password Lama"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            password
            // value={dataProfile.nama}
          />
          <Input
            label="Password Baru"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            password
            // value={dataProfile.email}
          />
          <Input
            label="Konfirmasi Password"
            width={'100%'}
            height={responsiveHeight(45)}
            fontSize={13}
            password
            // value={dataProfile.email}
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

export default EditPassword;

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
