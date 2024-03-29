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

import { createStore, combineReducers } from 'redux';
import izrazReducer from './store/reducers/izraz';

const masterReducer = combineReducers({
  izrazi: izrazReducer
})

const store = createStore(masterReducer)

import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Pocetna' 
            component={PocetniEkran} 
            options={{
              title: 'Odabir jezika'
            }}
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
    </Provider>
  );
}
