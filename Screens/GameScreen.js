import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Text, FlatList, useWindowDimensions } from 'react-native';

import NumberContainer from '../Components/Game/NumberContainer';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../Components/Game/GuessLogItem';



function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])


    const nextGuessHandler = (direction) => {
        if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
            Alert.alert("wrong", "you are wrong", [{ text: "sorry", style: "cancel" }])
            return;
        }


        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLength = guessRounds.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>

                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="remove" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.Button}>
                        <PrimaryButton onPressProp={nextGuessHandler.bind(this, "greater")}>
                            <Ionicons name="add" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                </View>

            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.Button}>
                        <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="remove" size={24} color="black" />
                        </PrimaryButton>
                    </View>

                    <NumberContainer>{currentGuess}</NumberContainer>

                    <View style={styles.Button}>
                        <PrimaryButton onPressProp={nextGuessHandler.bind(this, "greater")}>
                            <Ionicons name="add" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList data={guessRounds}
                    renderItem={(itemData) =>
                        <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item} />
            </View>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 40,
        alignItems: "center",
    },
    instructionText: {
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    buttonContainerWide: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20,
    },
    Button: {
        flex: 1,
        marginTop: 35,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 16,
    },
})