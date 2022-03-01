import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ShoppingCart} from '..';
import {Gap} from '../..';
import {doSaveKeywordJersey} from '../../../redux/actions';
import {
  colors,
  fonts,
  IC_ArrowLeft,
  IC_Search,
  IC_ShoppingCart,
} from '../../../res';
import {responsiveHeight, windowWidth} from '../../../utils/responsive';

const Header = ({type, icon, onPress, text, page}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  if (type === 'back-and-title') {
    return (
      <View style={styles.containerBackAndTitle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IC_ArrowLeft />
        </TouchableOpacity>
        <Gap width={20} />
        <Text style={styles.title}>{text}</Text>
      </View>
    );
  }
  if (type === 'only-back') {
    return (
      <View style={styles.containerOnlyBack}>
        <TouchableOpacity style={styles.wrapperBtnBack} onPress={onPress}>
          {icon}
        </TouchableOpacity>
      </View>
    );
  }

  const handleSearch = () => {
    dispatch(doSaveKeywordJersey(search));
    if (page !== 'Jersey') {
      navigation.navigate('Jersey');
    }
    setSearch('');
  };

  return (
    <View style={styles.containerPrimary}>
      <View style={styles.wrapper}>
        <View style={styles.sectionSearch}>
          <IC_Search />
          <TextInput
            placeholder="Cari Jersey . . . "
            style={styles.input}
            value={search}
            onChangeText={text => setSearch(text)}
            onSubmitEditing={() => handleSearch()}
          />
        </View>
        <Gap width={20} />
        <View style={styles.sectionCart}>
          <ShoppingCart value={1} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerPrimary: {
    height: responsiveHeight(125),
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    zIndex: 99,
  },
  container: {
    height: responsiveHeight(125),
    backgroundColor: colors.transparent,
    paddingHorizontal: 20,
    zIndex: 99,
  },
  containerOnlyBack: {
    backgroundColor: colors.transparent,
    paddingHorizontal: 20,
    paddingTop: 20,
    zIndex: 99,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionSearch: {
    backgroundColor: colors.white,
    flex: 1,
    height: 40,
    borderRadius: 25,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
  sectionCart: {justifyContent: 'center', alignItems: 'center', zIndex: 99},
  wrapperBtnBack: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 40,
    height: 40,
    width: 40,
  },
  containerBackAndTitle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  title: {fontFamily: fonts.Bold, fontSize: 24},
});
