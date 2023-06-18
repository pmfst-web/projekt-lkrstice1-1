import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Btn from '../components/Btn';
import { dodajIzraze } from '../store/reducers/izraz';
import { IZRAZI } from '../data/rjecnik';

const Kviz = ({ route, navigation }) => {
  const [prijevod, setPrijevod] = useState('');
  const { jezik, razlog, predznanje } = route.params;
  const dispatch = useDispatch();
  const izrazi = useSelector((state) => state.izrazi);

  useMemo(() => {
    dispatch(dodajIzraze(IZRAZI));
  }, [dispatch]);

  const filtriraniIzrazi = useMemo(() => {
    return izrazi.filter((izraz) => izraz.jezik === jezik && izraz.razlog === razlog && izraz.predznanje === predznanje);
  }, [izrazi, jezik, razlog, predznanje]);

  const randomIndeks = useMemo(() => {
    if (filtriraniIzrazi.length > 0) {
      return Math.floor(Math.random() * filtriraniIzrazi.length);
    }
    return null;
  }, [filtriraniIzrazi]);

  const provjeriOdgovor = (izraz, prijevod) => {
    if (izraz[1].toLowerCase() === prijevod.toLowerCase()) {
      return 'Točan odgovor!';
    }
    return 'Netočan prijevod, pokušajte ponovno!';
  };

  const izraz = useMemo(() => {
    if (randomIndeks !== null) {
      const izraz = filtriraniIzrazi[randomIndeks];
      return izraz.niz[Math.floor(Math.random() * izraz.niz.length)];
    }
    return null;
  }, [randomIndeks, filtriraniIzrazi]);

  useEffect(() => {
    setPrijevod('');
  }, [izraz]);

  const provjeriPrijevod = () => {
    if (prijevod.trim() === '') {
      Alert.alert('Unesite prijevod!');
    } else {
      Alert.alert(provjeriOdgovor(izraz, prijevod));
    }
  };

  const prikazIzraza = () => {
    if (izraz !== null) {
      return (
        <View style={stil.ekran}>
          <Text style={stil.izrazT}>{izraz[0]}</Text>
          <TextInput
            style={stil.unos}
            placeholder="Unesi prijevod"
            onChangeText={(text) => setPrijevod(text)}
            value={prijevod}
          />
          <Btn
            title="Provjeri"
            onPress={provjeriPrijevod}
          />
        </View>
      );
    }
  };

  return (
    <View style={stil.ekran}>
      {prikazIzraza()}
      <Btn title="Odabir jezika" onPress={() => navigation.navigate('Odabir')} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70
  },
  izrazT: {
    fontFamily: 'FaunaOne-Regular',
    fontSize: 30,
    paddingBottom: 50,
  },
  unos: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});

export default Kviz;
