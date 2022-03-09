/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigation} from '@react-navigation/native';
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

const index = ({type, data, name, icon, onPress}) => {
  const navigation = useNavigation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {dataLiga, loadingLiga, successLiga, errorMessageLiga} = useSelector(
    state => state.LigaReducer,
  );
  const {dataJersey, loadingJersey, successJersey, errorMessageJersey} =
    useSelector(state => state.JerseyReducer);

  if (type === 'cart-list') {
    return <View>{data && <CardShoppingCart data={data} />}</View>;
  }
  if (type === 'liga') {
    return (
      <View style={styles.containerLiga}>
        {dataLiga ? (
          Object.keys(dataLiga).map(key => {
            return (
              <>
                <CardLiga key={key} dataLiga={dataLiga[key]} id={key} />
              </>
            );
          })
        ) : (
          <View>
            <Text>Tidak ada</Text>
          </View>
        )}
      </View>
    );
  }
  if (type === 'jersey-home') {
    return (
      <View style={styles.containerJersey}>
        {dataJersey ? (
          Object.values(dataJersey)
            .slice(0, 6)
            .map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.wrapperImgJersey}
                  onPress={() => navigation.navigate('JerseyDetail', item)}>
                  <Image
                    source={{uri: item.gambar[0]}}
                    style={styles.imgJersey}
                  />
                  <Text style={styles.titleJersey}>{item.nama}</Text>
                  {/* <Text style={styles.titleJersey}>{item.nama}</Text> */}
                </TouchableOpacity>
              );
            })
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
        {dataJersey ? (
          Object.values(dataJersey).map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.wrapperImgJersey}
                onPress={() => navigation.navigate('JerseyDetail', item)}>
                <Image
                  source={{uri: item.gambar[0]}}
                  style={styles.imgJersey}
                />
                <Text style={styles.titleJersey}>{item.nama}</Text>
                {/* <Text style={styles.titleJersey}>{item.nama}</Text> */}
              </TouchableOpacity>
            );
          })
        ) : (
          <View>
            <Text>Tidak ada</Text>
          </View>
        )}
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
