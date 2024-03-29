import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Boje from '../constants/Boje';
import Btn from '../components/Btn';


const PocetniEkran = ({ navigation }) => {
    return(
        <View>
            <View style={stil.ekran}>
                <Image style={stil.slika} source={require('../assets/languages.jpg')}/>
                <Text style={stil.naslov}>Aplikacija</Text>
                <View style={stil.uputeV}>
                    <Text style={stil.upute}>
                        Odaberi jezik, razlog zašto ga učiš i predzananje
                    </Text>
                    <Text style={stil.upute}>
                        Na kraju te čeka kviz.
                    </Text>
                    <Text style={stil.upute}>
                        Sretno!
                    </Text>
                </View>
                <View style={stil.btn}>
                    <Btn 
                        title = "Kreni"
                        onPress = {() => {navigation.navigate('Odabir')}}
                    />
                </View>
            </View>
            
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        alignItems: 'center'
    },
    slika: {
        height: 400,
        maxWidth: '100%',
        resizeMode: 'cover'
    },
    naslov: {
        fontFamily: 'ConcertOne-Regular',
        fontSize: 70,
        color: Boje.Naslov,
        marginTop: 10
    },
    upute: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
        color: Boje.Tekst,
        fontFamily: "FaunaOne-Regular"
    },
    uputeV: {
        alignItems: 'center',
        marginTop: 20
    },
    btn: {
        marginTop: 45
    }
})


export default PocetniEkran