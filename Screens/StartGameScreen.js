import { useState } from 'react'
import { StyleSheet, TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView, } from 'react-native'

import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import Colors from '../Constants/ColorConstants';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';


const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    const { width, height } = useWindowDimensions();

    const numberInputHandler = (enteredNumber) => {
        setEnteredNumber(enteredNumber);
    }

    const resetInputHandler = () => {
        setEnteredNumber("");
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be in between 1 to 99",
                [{ text: "okay", style: "destructive", onPress: resetInputHandler }])
            return
        } else {
            onPickNumber(chosenNumber);
        }
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>

                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput style={styles.numberInput} maxLength={2}
                            keyboardType="number-pad" value={enteredNumber} onChangeText={numberInputHandler} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.Button}>
                                <PrimaryButton onPressProp={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.Button}>
                                <PrimaryButton onPressProp={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default StartGameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 40,
        borderBottomColor: Colors.yellow600,
        borderBottomWidth: 2,
        color: Colors.yellow600,
        marginVertical: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    Button: {
        flex: 1,
    },
})