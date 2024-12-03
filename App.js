import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ScoreBoard from './components/ScoreBoard';

export default function App() {
  const teamA = "Tim A";
  const teamB = "Tim B";

  return (
    <SafeAreaView style={styles.container}>
      <ScoreBoard teamA={teamA} teamB={teamB} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
