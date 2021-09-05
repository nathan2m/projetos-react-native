import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} /> */}
      <View style={styles.header}>
        <Text>Voltar</Text>
        <Text>Titulo</Text>
        <Text>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    /* flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between', */
  },

  header: {
    height: 60,
    backgroundColor: '#fff',
    //paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  /* box: {
    flex: 1,
    minWidth: 100,
    height: 100,
    backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10,
  }, */
});
