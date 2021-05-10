import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Testo originale');
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>{outputText}</Text>
      <Button title='Cambio' onPress={() => setOutputText('Cambio di testo')} />
     
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  textTop:{
    backgroundColor: '#fff',
    margin: 52,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
