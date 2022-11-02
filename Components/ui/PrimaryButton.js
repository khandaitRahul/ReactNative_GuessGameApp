import React from 'react'
import { View, Text, StyleSheet, Pressable, } from 'react-native'

import Colors from '../../Constants/ColorConstants';


const PrimaryButton = ({ children, onPressProp }) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPressProp} android_ripple={{ color: Colors.mud700 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 20,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.mud500,
        paddingHorizontal: 20,
        paddingVertical: 5,
        elevation: 6,
    },
    buttonText: {
        color: "#000",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.5,
    },
})