import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const Razlog = () => {
    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Razlog</Text>
            <JezikBtn title="Prijatelji/obitelj" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Posao/škola" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Hobi" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Ostalo" onPress = { () => {console.log("Klik")} } />
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

export default Razlog