import React from 'react'
import { useWindowDimensions, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import Colors from '../Constants/ColorConstants';


const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {

    const { width, height } = useWindowDimensions();

    let imgSize = 300;
    if (width < 380) {
        imgSize = 160;
    }

    if (height < 400) {
        imgSize = 80;
    }

    const imgStyle = {
        width: imgSize,
        height: imgSize,
        borderRadius: imgSize / 2,
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over</Title>
                <View style={[styles.imgContainer, imgStyle]}>
                    <Image style={styles.image} source={require("../assets/Images/success.jpg")} />
                </View>
                <Text style={styles.summaryText}>
                    your phone needed
                    <Text style={styles.highlight}> {roundNumber} </Text>
                    rounds to guess the number
                    <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
                <PrimaryButton onPressProp={onStartNewGame}>Start a New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}
export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        paddingTop: 80,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    imgContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        marginVertical: 40,
        overflow: "hidden",
        borderWidth: 3,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "Lora-Medium",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    highlight: {
        fontFamily: "Lora-SemiBold",
        color: Colors.mud500,
        fontSize: 24,
    }
})