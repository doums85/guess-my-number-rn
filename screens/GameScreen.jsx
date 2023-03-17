import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  Card,
  CustomButton,
  Divider,
  Heading,
} from '../components';
import { rootContext } from '../context/AppContext';
import GameOverScreen from './GameOverScreen';
import COLORS from '../constants/colors';

export default function GameScreen({ setScreen }) {
  const {
    numberEntered,
    secretNumber,
    score,
    indicator,
    highScore,
    opponents,
    onChangeHandler,
    changeNumberEntered,
    resetNumberEntered,
    decrementScore,
    indicatorScoreHandler,
    addOpponentHandler,
  } = useContext(rootContext);

  function retryHandler() {
    if (Number(numberEntered) !== secretNumber) {
      decrementScore();
      indicatorScoreHandler();
      addOpponentHandler();
      return;
    }

    setScreen(<GameOverScreen />);
  }
  return (
    <View>
      <Heading>Opponent's Guess</Heading>

      <Card>
        <View style={styles.cubeContainer}>
          <Text style={styles.cubeText}>?</Text>
        </View>

        {/* Input */}
        <View style={styles.container}>
          <CustomButton
            onPress={() =>
              changeNumberEntered('increment')
            }>
            <Entypo name="plus" size={24} color="black" />
          </CustomButton>

          <TextInput
            style={styles.input}
            defaultValue="?"
            autoCapitalize="words"
            keyboardType="number-pad"
            onChangeText={onChangeHandler}
            value={numberEntered}
            maxLength={2}
          />

          <CustomButton
            onPress={() =>
              changeNumberEntered('decrement')
            }>
            <Entypo name="minus" size={24} color="black" />
          </CustomButton>
        </View>

        {/* Buttons */}
        <View style={styles.container}>
          <CustomButton onPress={resetNumberEntered}>
            Reset
          </CustomButton>
          <Divider marginLeft={20} />
          <CustomButton onPress={retryHandler}>
            Retry
          </CustomButton>
        </View>
      </Card>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {/* Score */}
        <View style={styles.score}>
          <Entypo name="heart" size={24} color="crimson" />
          <Text style={styles.indicatorText}>{score}</Text>
        </View>

        {/* Indicator score */}
        <Text style={styles.indicator}>{indicator} </Text>

        {/* High Score */}
        <Text style={styles.indicatorText}>
          High Score : {highScore}
        </Text>
      </View>

      <FlatList
        data={opponents}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={
          <Divider marginVertical={14} />
        }
        renderItem={function ({ item, index }) {
          return (
            <View style={styles.opponent}>
              <Text># {index + 1}</Text>
              <Text>Opponent's Guess: {item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cubeContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  cubeText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    marginTop: 24,
  },
  input: {
    width: 90,
    paddingVertical: 8,
    marginHorizontal: 12,
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'crimson',
  },
  indicatorText: {
    fontSize: 16,
  },
  listContainer: {
    marginTop: 60,
  },
  opponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FCA311',
    padding: 10,
    borderRadius: 6,
    color: COLORS.primary,
    elevation: 4,
    shadowOffset: 2,
    shadowRadius: 3,
    shadowOpacity: 0.7,
  },
});
