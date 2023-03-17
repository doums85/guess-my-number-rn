import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import RootProvider, {
  rootContext,
} from './context/AppContext';
import { StartGameScreen } from './screens';

const background = require('./assets/background.jpeg');

export default function App() {
  const [fontsLoaded] = useFonts({
    'PressStart': require('./assets/PressStart2P-Regular.ttf'),
  });

  return (
    <LinearGradient
      style={styles.container}
      colors={['#F5F7Fa', '#B8C6DB']}>
      <ImageBackground
        imageStyle={styles.imageBackground}
        style={styles.image}
        source={background}>
        <SafeAreaView>
          {/* Provider Context */}
          <RootProvider>
            <StartGameScreen />
          </RootProvider>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  imageBackground: {
    opacity: 0.2,
  },
});
