import { Dimensions } from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
