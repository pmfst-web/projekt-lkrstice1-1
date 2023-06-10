import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Btn from '../components/Btn';
import { IZRAZI } from '../data/rjecnik';

const Kviz = ({ route, navigation }) => {
    const {jezik, razlog, predznanje} = route.params

    const prikazIzraza = (podaci) => {
        return(
            <Text>{podaci.item.fraza}</Text>
        )
    }
    return(
        <View style={stil.ekran}>
            <Btn title="Odabir jezika" onPress={() => navigation.navigate('Odabir')} />
            <Text>{jezik}, {razlog}, {predznanje}</Text>
            <FlatList data={IZRAZI} renderItem={prikazIzraza} />
        </View>
    )
}
const stil = StyleSheet.create({
    ekran: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Kviz