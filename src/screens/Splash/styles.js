import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {position: 'absolute', bottom: 10},
  txtVersion: {textAlign: 'center'},
  wrapperLottie: {
    flex: 1,
    position: 'absolute',
    height: 250,
    width: 250,
    bottom: 0,
    right: 0,
  },
});

export default styles;
