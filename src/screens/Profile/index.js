import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BannerSlider, Gap, Header, List, Loading} from '../../components';
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
  IL_NO_AVATAR,
} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {DummiesJersey} from '../../res/dummies/jersey';
import {
  responsiveHeight,
  responsiveWidth,
  windowHeight,
} from '../../utils/responsive';
import {clearStorage, getDataStorage} from '../../utils';
import {CONSTANT} from '../../constant';
import FIREBASE from '../../config/FIREBASE';

const Profile = ({navigation}) => {
  const [dataProfile, setDataProfile] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataUser();
  }, [getDataUser]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataUser = () => {
    getDataStorage(CONSTANT.STORAGE_DATAUSER)
      .then(res => {
        const data = res;
        if (data) {
          setDataProfile(data);
        } else {
          navigation.replace('Login');
        }
      })
      .catch(err => {
        // error
      });
  };

  const modalSignOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure to logout?',
      [
        {text: 'Yes', onPress: () => handleSignOut()},
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const handleSignOut = () => {
    setLoading(true);
    FIREBASE.auth()
      .signOut()
      .then(() => {
        clearStorage();
        navigation.replace('Login');
        setLoading(false);
      })
      .catch(err => {
        // an error happened
      });
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {loading && <Loading />}
        <View style={styles.wrapperHead}>
          <View style={styles.wrapperAvatar}>
            {avatar ? (
              <Image source={dataProfile.avatar} style={styles.image} />
            ) : (
              <Image source={IL_NO_AVATAR} style={styles.image} />
            )}
          </View>
          <View style={styles.desc}>
            <Text style={styles.textName}>{dataProfile.nama}</Text>
            <Text style={styles.text}>No Hp. {dataProfile.phone}</Text>
            <Text style={styles.text}>
              {dataProfile.address}, {dataProfile.city}, {dataProfile.province}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
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
            <List
              type="list-profile"
              icon={<IC_Signout />}
              name="Keluar"
              onPress={() => modalSignOut()}
            />
            <Gap height={100} />
          </View>
        </ScrollView>
      </View>
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
    marginTop: -30,
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
    backgroundColor: colors.primary,
    paddingBottom: 50,
    paddingTop: 25,
  },
  wrapperAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image: {height: 100, width: 100, borderRadius: 100 / 2},
  textName: {
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.white,
  },
  text: {
    textAlign: 'center',
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.white,
  },
  wrapperList: {paddingHorizontal: 20, marginVertical: 35},
});
