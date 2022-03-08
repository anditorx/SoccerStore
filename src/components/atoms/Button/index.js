import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../res';

const Button = ({...props}) => {
  if (props.disable) {
    return (
      <View
        style={{
          backgroundColor: props.disable ? colors.lightGrey : colors.primary,
          paddingVertical: 10,
          // paddingHorizontal: 70,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.submiting ? (
          <ActivityIndicator size="large" />
        ) : (
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
        )}
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={props.submiting ? null : props.onPress}
      style={{
        backgroundColor: props.submiting ? colors.lightGrey : colors.primary,
        paddingVertical: 10,
        // paddingHorizontal: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.submiting ? (
        <ActivityIndicator size="large" />
      ) : (
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
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
