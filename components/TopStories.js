import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function TopStories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Headlines</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
