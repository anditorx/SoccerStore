import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveHeight, responsiveWidth} from '../../../utils';
import {colors} from '../../../res';

const Slider = ({image}) => {
  const [openImg, setOpenImg] = useState(false);
  const [previewImg, setPreviewImg] = useState(false);
  const _clickedPreview = index => {
    setOpenImg(true);
    setPreviewImg([
      {
        url: '',
        props: {
          // Or you can set source directory.
          source: image[index],
        },
      },
    ]);
  };

  return (
    <View style={{position: 'absolute'}}>
      <SliderBox
        images={image}
        // autoplay
        circleLoop
        sliderBoxHeight={responsiveHeight(430)}
        ImageComponentStyle={styles.jersey}
        dotStyle={styles.dotStyle}
        dotColor={colors.primary}
        imageLoadingColor={colors.primary}
        onCurrentImagePressed={index => _clickedPreview(index)}
      />
      <Modal visible={openImg} transparent={true}>
        <ImageViewer
          imageUrls={previewImg}
          backgroundColor={colors.primary}
          onClick={() => setOpenImg(false)}
          enableSwipeDown
          onSwipeDown={() => setOpenImg(false)}
        />
      </Modal>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  jersey: {
    marginTop: 25,
    width: responsiveWidth(336),
  },
  dotStyle: {
    marginTop: -80,
  },
});
