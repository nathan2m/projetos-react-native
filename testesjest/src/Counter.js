import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Você tem {this.props.count * 2} counters.</Text>
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

export default Counter;
