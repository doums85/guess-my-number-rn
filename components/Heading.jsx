import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Heading({children}) {
  return (<Text style={styles.heading}>{children}</Text>)
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColr: '#000',
        padding: 12,
        fontFamily: 'PressStart'
    }
})