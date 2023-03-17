import { View } from 'react-native';
import React from 'react';

export default function Card({ margin, ...otherSpaces }) {
  return <View style={{ margin, ...otherSpaces }} />;
}
