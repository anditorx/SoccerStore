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
import {CardLiga, Gap, Header, List, Separator} from '../../components';
import {colors, fonts, IC_ArrowLeft} from '../../res';
import {Liga} from '../../res/dummies/liga';
import {
  responsiveHeight,
  responsiveWidth,
  windowHeight,
} from '../../utils/responsive';
import {numberWithCommas} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const JerseyDetail = ({route, navigation}) => {
  const dataParam = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Header
        type="only-back"
        icon={<IC_ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default JerseyDetail;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.primary, flex: 1},
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: responsiveHeight(windowHeight / 4.5),
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
