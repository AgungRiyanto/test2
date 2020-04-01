import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './ContainerStyle';

const Container = ({children, backgroundImage, backgroundBlur, style}) => {
  return (
    <View style={[styles.container]}>
      {backgroundImage ? (
        <ImageBackground
          style={[styles.image, style]}
          resizeMode="cover"
          source={
            backgroundBlur
              ? require('../assets/Background_Login.jpg')
              : require('../assets/Background_Home.jpg')
          }>
          {children}
        </ImageBackground>
      ) : (
        <View style={style}>{children}</View>
      )}
    </View>
  );
};

export default Container;
