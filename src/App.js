import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [clicked, setClicked] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{
        fontWeight: 'bold',
        marginBottom: 20,
      }}>{clicked}</Text>
      <Button title='Click Me!' onPress={() => {
        setClicked(clicked + 1);
      }} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
