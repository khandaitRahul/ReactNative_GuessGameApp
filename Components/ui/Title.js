import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native';

import Colors from '../../Constants/ColorConstants';

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "Lora-SemiBold",
        fontSize: 30,
        // fontWeight: "bold",
        color: Colors.maroon700,
        textAlign: "center",
        // borderWidth: Platform.OS === 'android' ? 3 : 0,
        borderWidth: Platform.select({ ios: 0, android: 3 }),
        borderColor: Colors.maroon700,
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 18,
        maxWidth: "90%",
        width: "90%",
    },
})