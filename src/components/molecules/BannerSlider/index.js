import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, IL_Slider_01, IL_Slider_02} from '../../../res';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';

const BannerSlider = () => {
  const [imgSlider, setImgSlider] = useState([IL_Slider_01, IL_Slider_02]);
  return (
    <View style={styles.contianer}>
      <SliderBox
        images={imgSlider}
        autoplay
        circleLoop
        sliderBoxHeight={responsiveHeight(130)}
        ImageComponentStyle={styles.slider}
        dotStyle={styles.dotStyle}
        dotColor={colors.primary}
        imageLoadingColor={colors.primary}
      />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  contianer: {
    marginTop: -25,
  },
  slider: {
    borderRadius: 10,
    width: responsiveWidth(354),
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
