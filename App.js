import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PocetniEkran from './screens/PocetniEkran';
import OdabirJezika from './screens/OdabirJezika';
import Razlog from './screens/Razlog';
import Predzanje from './screens/Predznanje';
import Kviz from './screens/Kviz';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Pocetna' 
          component={PocetniEkran} 
        />
        <Stack.Screen 
          name='Odabir' 
          component={OdabirJezika} 
        />
        <Stack.Screen 
          name='Razlog' 
          component={Razlog} 
        />
        <Stack.Screen 
          name='Predznanje' 
          component={Predzanje} 
        />
        <Stack.Screen 
          name='Kviz' 
          component={Kviz} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

