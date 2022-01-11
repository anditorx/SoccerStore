import {StyleSheet} from 'react-native';
import {colors} from '../../res';
import {responsiveHeight, responsiveWidth} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.white,
  },
  wrapperLogo: {justifyContent: 'center', alignItems: 'center', marginTop: 50},
  footer: {position: 'absolute', bottom: 10},
  txtVersion: {textAlign: 'center'},
  wrapperLottie: {
    flex: 1,
    position: 'absolute',
    height: responsiveHeight(328),
    width: responsiveWidth(196),
    bottom: responsiveHeight(-70),
    right: 0,
  },
  wrapperFormLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 35,
    padding: 25,
    borderWidth: 0.2,
    borderColor: colors.grey,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  wrapperRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textUnderline: {color: colors.primary, textDecorationLine: 'underline'},
});

export default styles;
