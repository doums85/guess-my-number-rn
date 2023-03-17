const { createContext, useState } = require('react');

// 1) Create Context
export const rootContext = createContext();
// 2) Extract Provider
const { Provider } = rootContext;

// 3) Create Provider component
export default function RootProvider({ children }) {
  const random = Math.trunc(Math.random() * 20 + 1);

  const [secretNumber, setSecretNumber] = useState(random);
  const [numberEntered, setNumberEntered] = useState('');
  const [indicator, setIndicator] = useState(null);
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [opponents, setOpponents] = useState([]);
  // Update number entered statement
  const onChangeHandler = (numberFromInput) =>
    setNumberEntered(numberFromInput);

  const resetNumberEntered = () => setNumberEntered('');

  const addOpponentHandler = () =>
    setOpponents([...opponents, numberEntered]);

  // Increment and Decrement
  function changeNumberEntered(type) {
    switch (type) {
      case 'increment':
        const increment = Number(numberEntered) + 1;
        setNumberEntered(increment.toString());
        break;
      case 'decrement':
        const decrement = numberEntered - 1;
        setNumberEntered(decrement.toString());
        break;
      default:
        return numberEntered;
    }
  }

  // Indicator score high or low
  function indicatorScoreHandler() {
    setIndicator(
      secretNumber > numberEntered
        ? 'Too low 📉'
        : 'Too high 📈'
    );
  }

  const decrementScore = () => setScore(score - 1);

  // Value
  const value = {
    secretNumber,
    numberEntered,
    indicator,
    highScore,
    score,
    opponents,
    onChangeHandler,
    resetNumberEntered,
    changeNumberEntered,
    indicatorScoreHandler,
    decrementScore,
    addOpponentHandler
  };

  return <Provider value={value}>{children}</Provider>;
}
