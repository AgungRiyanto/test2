import React from 'react';
import {Image} from 'react-native';
import styles from './IconStyle';

// icon source
import NavDrawerWhite from '../assets/Nav_Drawer_White.png';
import NavDrawerBlack from '../assets/Nav_Drawer_Black.png';
import ArrowHome from '../assets/Arrow_Home.gif';

const Icon = ({name, width, height, color, style, transform}) => {
  return (
    <Image
      source={sourceIcon(name)}
      style={[
        styles.icon,
        {
          transform: [{rotate: `${transform ? transform : 0}deg`}],
          width: width ? width : 25,
          height: height ? height : 25,
          tintColor: color ? color : null,
        },
        style,
      ]}
      resizeMode="contain"
    />
  );
};

const sourceIcon = name => {
  let icon;
  switch (name) {
    case 'nav-menu-black':
      icon = NavDrawerBlack;
      break;
    case 'arrow':
      icon = ArrowHome;
      break;
    default:
      icon = NavDrawerWhite;
      break;
  }
  return icon;
};

export default Icon;
