import React from 'react';
import {View, Text} from 'react-native';
import Navigator from './src/routes/navigator';
import {Context} from './src/screens/context';

export default function App() {
  return (
    <Context>
      <Navigator />
    </Context>
  );
}
