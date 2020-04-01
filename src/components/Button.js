import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './ButtonStyle';

const Button = ({text, outline, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          outline ? [styles.outlineButton, style] : [styles.blockButton, style]
        }>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
