import React, {createRef} from 'react';
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
} from '../../components';
import {colors, fonts, IC_ArrowLeft, IC_ShoppingCartWhite} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {
  responsiveHeight,
  responsiveWidth,
  windowHeight,
} from '../../utils/responsive';
import {numberWithCommas} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {DummiesJersey} from '../../res/dummies/jersey';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ActionSheet from 'react-native-actions-sheet';

const actionSheetRef = createRef();
const JerseyDetail = ({route, navigation}) => {
  const dataParam = route.params;
  let actionSheet;
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Header
        type="only-back"
        icon={<IC_ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <Slider image={dataParam.image} />
      <KeyboardAwareScrollView ref={actionSheetRef}>
        <View style={styles.content}>
          <View style={styles.wrapperLiga}>
            <CardLiga data={dataParam.liga} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.name}>{dataParam.name}</Text>
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
              <Text style={styles.textQNW}>Jenis : Replika Top Quality</Text>
              <Text style={styles.textQNW}>Berat : 0.25 kg</Text>
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
    </SafeAreaView>
  );
};

export default JerseyDetail;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.primary},
  content: {
    // flex: 1,
    backgroundColor: 'white',
    marginTop: responsiveHeight(windowHeight / 2),
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
