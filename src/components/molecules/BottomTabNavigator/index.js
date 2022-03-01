import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {TabItemBottomNavigator} from '..';
import {doDeleteStateJerseyByLiga} from '../../../redux/actions';
import {colors} from '../../../res';

const BottomTabNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const dispatch = useDispatch();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          if (route.name !== 'Jersey') {
            dispatch(doDeleteStateJerseyByLiga());
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItemBottomNavigator
            key={index}
            isFocused={isFocused}
            options={options}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
          />
        );
      })}
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,

    marginBottom: 15,
    marginHorizontal: 20,
    borderRadius: 30,

    // paddingBottom: 10,
    // paddingTop: 15,

    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
