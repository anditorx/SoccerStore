import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardLiga} from '../..';
import {colors, fonts, IC_ArrowRight, IC_EditProfile} from '../../../res';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';

const index = ({type, data, name, icon, onPress, navigation}) => {
  if (type === 'liga') {
    return (
      <View style={styles.containerLiga}>
        {data.map(item => {
          return <CardLiga data={item} key={item.index} />;
        })}
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
});
