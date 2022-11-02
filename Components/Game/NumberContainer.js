import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../Constants/ColorConstants';


const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.maroon700,
        backgroundColor: "#ffdb9c",
        padding: deviceWidth < 400 ? 12 : 24,
        margin: deviceWidth < 400 ? 12 : 24,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.maroon700,
        fontSize: 40,
        // fontWeight: "bold",
        fontFamily: "Lora-Bold",
    }
})