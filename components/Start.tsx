import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/hooks/Color'

export default function Start() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.Table}>
            <Text style={styles.BTNTE}>1</Text>
            <Text style={styles.BTNTE}>2</Text>
            <Text style={styles.BTNTE}>3</Text>
            <Text style={styles.BTNTE}>4</Text>
            <Text style={styles.BTNTE}>5</Text>
            <Text style={styles.BTNTE}>6</Text>
            <Text style={styles.BTNTE}>7</Text>
            <Text style={styles.BTNTE}>8</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg,
    },
    BTNTE:{
        width:50,
        height:50,
        backgroundColor:'yellow',
    }
})