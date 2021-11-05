import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  colors,
  IC_HomeOff,
  IC_HomeOn,
  IC_JerseyOff,
  IC_JerseyOn,
  IC_ProfileOff,
  IC_ProfileOn,
} from '../../../res';

const index = ({isFocused, options, onPress, onLongPress, label}) => {
  const Icon = ({label, isFocused}) => {
    switch (label) {
      case 'Home':
        return isFocused ? <IC_HomeOn /> : <IC_HomeOff />;
      case 'Jersey':
        return isFocused ? <IC_JerseyOn /> : <IC_JerseyOff />;
      case 'Profile':
        return isFocused ? <IC_ProfileOn /> : <IC_ProfileOff />;

      default:
        return <IC_HomeOn />;
    }
  };

  return (
    <TouchableOpacity
      key={index}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon label={label} isFocused={isFocused} />
      <Text style={styles.label(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: isFocused => ({
    color: isFocused ? colors.white : colors.blueSecondary,
    fontSize: 12,
  }),
});
