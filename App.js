import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PocetniEkran from './screens/PocetniEkran';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const dohvatiFont = () => {
    return Font.loadAsync ({
        'ConcertOne-Regular': require('./assets/fonts/ConcertOne-Regular.ttf'),
        'FaunaOne-Regular': require('./assets/fonts/FaunaOne-Regular.ttf'),
    })
}

export default function App() {
  const [podaciUcitani, postaviPodatke] = useState(false)

  if(!podaciUcitani){
    return(
      <AppLoading 
        startAsync = {dohvatiFont}
        onFinish = {() => {postaviPodatke(true)}}
        onError = {(err) => console.error(err)}
      />
    )
  }

  return (
    <View>
      <PocetniEkran />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
