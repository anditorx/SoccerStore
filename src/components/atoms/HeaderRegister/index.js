import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '..';
import {colors, fonts} from '../../../res';
import {responsiveHeight, responsiveWidth} from '../../../utils';

const HeaderRegister = ({...props}) => {
  return (
    <View style={styles.wrapperHeader}>
      <View style={styles.viewIllustration}>{props.illustration}</View>
      {props.type === 'register-1' ? <Gap height={20} /> : <Gap height={40} />}
      <Text style={styles.textHeader}>{props.title1}</Text>
      <Text style={styles.textHeader}>{props.title2}</Text>
      <View style={styles.wrapperCircle}>
        {props.type === 'register-1' ? (
          <>
            <View style={styles.circlePrimary} />
            <Gap width={5} />
            <View style={styles.circleSecondary} />
          </>
        ) : (
          <>
            <View style={styles.circleSecondary} />
            <Gap width={5} />
            <View style={styles.circlePrimary} />
          </>
        )}
      </View>
    </View>
  );
};

export default HeaderRegister;

const styles = StyleSheet.create({
  wrapperHeader: {
    alignItems: 'center',
  },
  viewIllustration: {
    height: responsiveHeight(147),
    width: responsiveWidth(277),
  },
  textHeader: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 5,
  },
  circlePrimary: {
    height: 10,
    width: 10,
    backgroundColor: colors.primary,
    borderRadius: 10 / 2,
  },
  circleSecondary: {
    height: 10,
    width: 10,
    backgroundColor: colors.grey,
    borderRadius: 10 / 2,
  },
});
