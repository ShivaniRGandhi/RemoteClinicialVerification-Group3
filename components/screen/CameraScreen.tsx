import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainCamera from '../camera/MainCamera'

const CameraScreen = ({navigation}) => {
    return (
        <MainCamera navigation={navigation}/>
    )
}

export default CameraScreen

const styles = StyleSheet.create({})
