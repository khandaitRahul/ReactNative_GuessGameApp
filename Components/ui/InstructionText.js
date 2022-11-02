import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Colors from '../../Constants/ColorConstants';

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}
export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "Lora-Regular",
        color: Colors.mud500,
        fontSize: 24,
    },
})