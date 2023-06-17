import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TextInput } from 'react-native';
import Btn from '../components/Btn';
import { useSelector } from 'react-redux';
import izrazReducer from '../store/reducers/izraz';

const Kviz = ({ route, navigation }) => {
    const [prijevod, setPrijevod] = useState('Pocetak');
    const {jezik, razlog, predznanje} = route.params
    const odabirIzraza = useSelector(izrazReducer)

    const prikazIzraza = (podaci) => {
        if(podaci.item.jezik === jezik && podaci.item.razlog === razlog && podaci.item.predznanje === predznanje){
            const provjera = (a, b) => {
                if(a === b){
                    return "Tocan odgovor"
                }
                return "Pokusajte ponovno"
            }
            return (
                <View style={stil.ekran}>
                    <Text style={stil.izrazT}>{podaci.item.niz[Math.floor(Math.random()*podaci.item.niz.length)][0]}</Text>
                    <TextInput 
                        style={stil.unos}
                        placeholder='Unesi prijevod'
                        onChangeText = {(val) => setPrijevod(val)}
                    />
                    <Btn
                        title='Provjeri'
                        onPress = {() => alert(provjera(podaci.item.niz[2][1], prijevod))}
                    />
                </View>
            )
        }
    }

    return(
        <View style={stil.ekran}>
            <FlatList data={odabirIzraza} renderItem={prikazIzraza} style={stil.izraz}/>
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
        fontSize: 45,
        paddingBottom: 50
    },
    unos: {
        borderWidth: 1,
        borderColor: "#777",
        width: 200,
        height: 50,
        marginBottom: 20,
        paddingLeft: 20
    }

})

export default Kviz