import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Main from './src/components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}
