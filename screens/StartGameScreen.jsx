import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import {
  CustomButton,
  Heading,
  Card,
  Divider,
} from '../components';
import { rootContext } from '../context/AppContext';
import GameOverScreen from './GameOverScreen';
import GameScreen from './GameScreen';

export default function StartGameScreen() {
  const {
    secretNumber,
    numberEntered,
    decrementScore,
    indicatorScoreHandler,
    addOpponentHandler,
    onChangeHandler,
    resetNumberEntered,
  } = useContext(rootContext);
  const [screen, setScreen] = useState(null);

  function startGameHandler() {
    console.log(secretNumber);
    if (numberEntered > 20 || numberEntered === 0) {
      return Alert.alert(
        'Erreur 💥',
        'Please provide a number between 1 and 20',
        [
          {
            text: 'Oups...',
            // onPress: () => console.log('Hello'),
            style: 'destructive',
          },
        ]
      );
    }

    if (secretNumber === Number(numberEntered)) {
      setScreen(GameOverScreen);
    } else {
      indicatorScoreHandler();
      decrementScore();
      addOpponentHandler()
      setScreen(<GameScreen setScreen={setScreen}/>);
    }
  }

  if (numberEntered && screen) return screen;
  return <GameScreen setScreen={setScreen} />;


  return (
    <View>
      <Heading>Guess My Number</Heading>
      <Card>
        <Text style={styles.intro}>
          Enter a number between 1 and 20
        </Text>
        {/* Input */}
        <TextInput
          style={styles.input}
          defaultValue="?"
          autoCapitalize="words"
          keyboardType="number-pad"
          onChangeText={onChangeHandler}
          value={numberEntered}
          maxLength={2}
        />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <CustomButton onPress={resetNumberEntered}>
            Reset
          </CustomButton>
          <Divider marginLeft={20} />
          <CustomButton onPress={startGameHandler}>
            Start
          </CustomButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  intro: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  input: {
    width: 90,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
});
