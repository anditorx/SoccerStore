import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Loading} from '..';
import {CardHistoryOrder, CardLiga, CardShoppingCart} from '../..';
import {colors, fonts, IC_ArrowRight, IC_EditProfile} from '../../../res';
import {numberWithCommas} from '../../../utils';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';

const index = ({type, data, name, icon, onPress, navigation}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {dataLiga, loadingLiga, successLiga, errorMessageLiga} = useSelector(
    state => state.LigaReducer,
  );

  if (type === 'cart-list') {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {data.map((item, index) => {
            return <CardShoppingCart data={item} key={index} />;
          })}
        </View>
      </ScrollView>
    );
  }
  if (type === 'liga') {
    return (
      <View style={styles.containerLiga}>
        {dataLiga ? (
          Object.keys(dataLiga).map((item, index) => {
            return <CardLiga dataLiga={dataLiga[item]} key={index} />;
          })
        ) : dataLiga ? (
          <Loading />
        ) : (
          <View>
            <Text>Tidak ada</Text>
          </View>
        )}
      </View>
    );
  }
  if (type === 'jersey') {
    return (
      <View style={styles.containerJersey}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.wrapperImgJersey}
              onPress={() => navigation.navigate('JerseyDetail', item)}>
              <Image source={item.image[0]} style={styles.imgJersey} />
              <Text style={styles.titleJersey}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  if (type === 'list-profile') {
    return (
      <TouchableOpacity style={styles.wrapperListProfile} onPress={onPress}>
        {icon}
        <View style={{flex: 1, marginLeft: 30}}>
          <Text>{name}</Text>
        </View>
        <IC_ArrowRight />
      </TouchableOpacity>
    );
  }
  if (type === 'history-order') {
    return (
      <ScrollView>
        <View style={styles.containerHistoryOrder}>
          {data.map(pesanan => {
            return <CardHistoryOrder data={pesanan} key={pesanan.id} />;
          })}
        </View>
      </ScrollView>
    );
  }
  return (
    <View>
      <Text>List Default</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerLiga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  containerJersey: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperImgJersey: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    width: responsiveWidth(165),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginVertical: 15,
    alignItems: 'center',
  },
  imgJersey: {
    height: responsiveHeight(124),
    width: responsiveWidth(124),
  },
  titleJersey: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    textAlign: 'center',
  },
  wrapperListProfile: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  containerHistoryOrder: {
    marginHorizontal: 5,
    marginTop: 20,
  },
});
