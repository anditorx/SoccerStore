import React from 'react';
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

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.wrapperHead}>
            <View style={styles.wrapperAvatar}>
              <Image source={IL_Avatar} style={styles.image} />
            </View>
            <View style={styles.desc}>
              <Text style={styles.textName}>John Doe</Text>
              <Text style={styles.text}>No Hp. 085881209231</Text>
              <Text style={styles.text}>
                Jalan Damai No.28 RT002/003, Kelurahan Pegangsaan, Kecamatan
                Kebayoran Baru, Jakarta Selatan 12210
              </Text>
            </View>
          </View>
          <View style={styles.wrapperList}>
            <List
              type="list-profile"
              icon={<IC_EditProfile />}
              name="Edit Profile"
            />
            <List
              type="list-profile"
              icon={<IC_EditPassword />}
              name="Change Password"
            />
            <List
              type="list-profile"
              icon={<IC_Shirt />}
              name="Riwayat Pemesanan"
            />
            <List type="list-profile" icon={<IC_Signout />} name="Keluar" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.primary, flex: 1},
  screen: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: responsiveHeight(windowHeight / 6),
    height: responsiveHeight(windowHeight),
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
