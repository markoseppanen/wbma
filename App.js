import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import {List} from './components/List';

const App = () => {
  return (
    <View style={styles.container}>
      <List />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ebf1f4',

    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default App;
