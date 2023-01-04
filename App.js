import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './Views/IntroScreen';
import MainPage from './Views/MainPage';

export default function App() {
  const [isLoaded,setisLoaded] = useState(false)

  setTimeout(() => {
    setisLoaded(true)
  }, 2000);

  return (
    <View style={styles.container}>
      {isLoaded?<MainPage/>:<IntroScreen/>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// expo build:android