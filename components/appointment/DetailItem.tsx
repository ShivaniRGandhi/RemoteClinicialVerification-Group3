import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailItem = ({title, content}) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

export default DetailItem
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'center'
    },
    title: {
        position: 'absolute',
        left: 30,
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    content: {
        position: 'absolute',
        left: "50%",
    }

})