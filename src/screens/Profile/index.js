import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BannerSlider, Gap, Header, List} from '../../components';
import {
  colors,
  DummiesProfile,
  fonts,
  IC_ArrowRight,
  IC_EditPassword,
  IC_EditProfile,
  IC_Shirt,
  IC_Signout,
  IL_Avatar,
} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {DummiesJersey} from '../../res/dummies/jersey';
import {
  responsiveHeight,
  responsiveWidth,
  windowHeight,
} from '../../utils/responsive';

const Profile = ({navigation}) => {
  const [dataProfile, setDataProfile] = useState(DummiesProfile.Profile);

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
        <View style={styles.content}>
          <View style={styles.wrapperHead}>
            <View style={styles.wrapperAvatar}>
              <Image source={dataProfile.avatar} style={styles.image} />
            </View>
            <View style={styles.desc}>
              <Text style={styles.textName}>{dataProfile.nama}</Text>
              <Text style={styles.text}>No Hp. {dataProfile.nomerHp}</Text>
              <Text style={styles.text}>
                {dataProfile.alamat}, {dataProfile.kota}, {dataProfile.provinsi}
              </Text>
            </View>
          </View>
          <View style={styles.wrapperList}>
            <List
              type="list-profile"
              icon={<IC_EditProfile />}
              name="Edit Profile"
              onPress={() => navigation.navigate('EditProfile', dataProfile)}
            />
            <List
              type="list-profile"
              icon={<IC_EditPassword />}
              name="Change Password"
              onPress={() => navigation.navigate('EditPassword', dataProfile)}
            />
            <List
              type="list-profile"
              icon={<IC_Shirt />}
              name="Riwayat Pemesanan"
              onPress={() => navigation.navigate('HistoryOrder')}
            />
            <List type="list-profile" icon={<IC_Signout />} name="Keluar" />
            <Gap height={100} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.primary, flex: 0},
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: responsiveHeight(windowHeight),
    // height: responsiveHeight(windowHeight),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  wrapperLiga: {
    padding: 20,
  },
  titleLiga: {
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
  wrapperJersey: {
    padding: 20,
  },
  titleJersey: {
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
  wrapperHead: {
    alignItems: 'center',
  },
  wrapperAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(windowHeight / 4 - 300),
  },
  desc: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image: {height: 150, width: 150, borderRadius: 150 / 2},
  textName: {textAlign: 'center', fontFamily: fonts.SemiBold, fontSize: 18},
  text: {
    textAlign: 'center',
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
  wrapperList: {paddingHorizontal: 20, marginVertical: 20},
});
