import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../res';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';

const index = ({type, data}) => {
  if (type === 'liga') {
    return (
      <View style={styles.containerLiga}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.wrapperImgLiga}>
              <Image source={item.image} style={styles.imgLiga} />
            </TouchableOpacity>
          );
        })}
      </View>
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
  wrapperImgLiga: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imgLiga: {
    height: responsiveHeight(70),
    width: responsiveWidth(57),
  },
});
