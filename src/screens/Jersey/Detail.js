import React, {createRef, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {
  CardLiga,
  Gap,
  Header,
  List,
  Separator,
  Slider,
  Input,
  Picker,
  Button,
  Loading,
} from '../../components';
import {colors, fonts, IC_ArrowLeft, IC_ShoppingCartWhite} from '../../res';
import {
  responsiveHeight,
  responsiveWidth,
  windowHeight,
} from '../../utils/responsive';
import {numberWithCommas} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';

const actionSheetRef = createRef();
const JerseyDetail = ({route, navigation}) => {
  const dataParam = route.params;
  console.tron.log('🚀 ~ dataParam :=>', dataParam);
  const {dataLiga, loadingLiga, successLiga, errorMessageLiga} = useSelector(
    state => state.LigaReducer,
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <SafeAreaView style={{backgroundColor: colors.primary}}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView ref={actionSheetRef}>
          <Header
            type="only-back"
            icon={<IC_ArrowLeft />}
            onPress={() => navigation.goBack()}
          />
          <Slider image={dataParam.gambar} />
          <View style={styles.content}>
            <View style={styles.wrapperLiga}>
              <CardLiga
                key={dataParam.liga}
                dataLiga={dataLiga[dataParam.liga]}
                id={dataParam.liga}
              />
            </View>
            <View style={styles.desc}>
              <Text style={styles.name}>{dataParam.nama}</Text>
              <Text style={styles.price}>
                Rp {numberWithCommas(dataParam.harga)}
              </Text>
            </View>
            <Separator
              borderWidth={0.3}
              marginHorizontal={20}
              color={colors.lightGrey}
            />

            <View style={styles.contentDesc}>
              <View style={styles.wrapperQualityAndWeight}>
                <Text style={styles.textQNW}>Jenis : {dataParam.jenis}</Text>
                <Text style={styles.textQNW}>Berat : {dataParam.berat} kg</Text>
              </View>
              <Gap height={10} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Input
                  label="Jumlah"
                  width={responsiveWidth(120)}
                  height={responsiveHeight(45)}
                  fontSize={13}
                  placeholder="0"
                />
                <Picker
                  type="picker"
                  label="Ukuran"
                  width={responsiveWidth(120)}
                  height={responsiveHeight(45)}
                  fontSize={13}
                  datas={dataParam.ukuran}
                />
              </View>
              <Input
                type="textarea"
                label="Keterangan"
                fontSize={13}
                placeholder="Keterangan"
              />
              <Gap height={25} />
              <Button text="Masukkan Keranjang" icon={IC_ShoppingCartWhite} />
            </View>
          </View>
        </KeyboardAwareScrollView>
        {loading && (
          <View style={{position: 'absolute', marginTop: 50}}>
            <Loading />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default JerseyDetail;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.primary, flex: 0},
  content: {
    // flex: 1,
    backgroundColor: 'white',
    marginTop: responsiveHeight(windowHeight / 2.5),
    height: responsiveHeight(windowHeight),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  desc: {
    padding: 20,
  },
  name: {
    fontFamily: fonts.Bold,
    fontSize: RFValue(24, windowHeight),
    textTransform: 'capitalize',
    color: colors.black,
  },
  price: {
    fontFamily: fonts.Regular,
    fontSize: 21,
    color: colors.black,
  },
  wrapperLiga: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -50,
  },
  contentDesc: {
    padding: 20,
  },
  wrapperQualityAndWeight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textQNW: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
  },
});
