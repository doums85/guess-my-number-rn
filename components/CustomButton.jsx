import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function CustomButton({
  onPress,
  children,
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: '#5762B7',
    padding: 16,
    paddingVertical: 14,
  },
  buttonText: {
    textAlign: 'center',
  },
});
