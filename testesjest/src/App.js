import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Test</Text>
        <Todos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
