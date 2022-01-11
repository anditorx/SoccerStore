import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../res';

const Button = ({...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: colors.primary,
        paddingVertical: 15,
        // paddingHorizontal: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.type !== 'text-only' && <props.icon />}
        <Text
          style={{
            marginLeft: 10,
            color: 'white',
            fontFamily: fonts.Bold,
            fontSize: 16,
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
