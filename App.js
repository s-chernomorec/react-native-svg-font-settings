/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Svg, {Text} from 'react-native-svg'

const App: () => Node = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle={'light-content'} />
    <Svg width={'100%'} height={'100%'}>
      <Text
        fill={'black'}
        fontSize={28}
        fontFamily={'SFProRounded-Regular'}
        x="20"
        y="200"
        textAnchor="start"
        fontFeatureSettings={'case 1'}
      >
        {'-+1!2@3#4$5%6^7&8*9(0)+-'}
      </Text>
    </Svg>
  </SafeAreaView>
);

export default App;
