import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const Predznanje = ({ route, navigation }) => {
    const { jezik, razlog } = route.params
    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Odaberi jezik</Text>
            <JezikBtn 
                title="Početnik" 
                onPress = {() => {navigation.navigate('Kviz', {
                    predznanje: 'pocetnik',
                    jezik, 
                    razlog
                })}} 
            />
            <JezikBtn 
                title="Posjedujem određeno predznanje" 
                onPress = {() => {navigation.navigate('Kviz', {
                    predznanje: 'posjeduje',
                    jezik,
                    razlog
                })}} 
            />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        alignItems: 'center',
        marginTop: 180
    },
    naslov: {
        fontSize: 20,
        fontFamily: 'FaunaOne-Regular',
        color: Boje.Naslov,
    }
})

export default Predznanje