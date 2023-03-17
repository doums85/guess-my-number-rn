import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    borderRadius: 6,
    backgroundColor: '#222',
    elevation: 4,

    shadowOffset: 2,
    shadowRadius: 4,
    shadowOpacity: 0.75
  },
});
