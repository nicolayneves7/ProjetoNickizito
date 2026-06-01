import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/bg-smartphone.jpg')}
        style={styles.image}
      />

      <Text style={styles.text}>Nickinho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  text: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
});