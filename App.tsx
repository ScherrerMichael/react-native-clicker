import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>you have clicked {count} times!</Text>

      <View onClick={() => setCount(count + 1)} style={styles.touchArea}>
        <Text>click here</Text>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  touchArea: {
    marginTop: 10,
    backgroundColor: '#defce7',
    height: 100,
    width: '50%',
    textAlign: 'center',

  },
});
