import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Btn from '../components/Btn';
import { useSelector } from 'react-redux';
import izrazReducer from '../store/reducers/izraz';
import Unos from '../components/Unos';

const Kviz = ({ route, navigation }) => {
    const {jezik, razlog, predznanje} = route.params
    const odabirIzraza = useSelector(izrazReducer)
    const [unos, setUnos] = ''

    const prikazIzraza = (podaci) => {
        if(podaci.item.jezik === jezik && podaci.item.razlog === razlog && podaci.item.predznanje === predznanje){
            return <Text style={stil.izrazT}>{podaci.item.fraza}</Text>
        }
    }

    return(
        <View style={stil.ekran}>
            <FlatList data={odabirIzraza} renderItem={prikazIzraza} style={stil.izraz}/>
            <Unos value={unos} onChangeText={provjeraPrijevoda()}/>
            <Btn title="Odabir jezika" onPress={() => navigation.navigate('Odabir')} />
        </View>
    )
}
const stil = StyleSheet.create({
    ekran: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    izraz: {
        paddingTop: 150,
        paddingBottom: 50,
    },
    izrazT: {
        fontFamily: 'FaunaOne-Regular',
        fontSize: 45
    }

})

export default Kviz