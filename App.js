import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import Colors from './Constants/ColorConstants';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/Fonts/Lora-Regular.ttf"),
    "Lora-Bold": require("./assets/Fonts/Lora-Bold.ttf"),
    "Lora-Medium": require("./assets/Fonts/Lora-Medium.ttf"),
    "Lora-SemiBold": require("./assets/Fonts/Lora-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }


  const GameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }



  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber}
      roundNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }



  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.mud300, Colors.maroon300, Colors.maroon700]} style={styles.rootScreen}>
        <ImageBackground source={require("./assets/Images/bg_image.jpg")}
          resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  }
});



