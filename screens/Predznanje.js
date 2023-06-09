import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const Predznanje = () => {
    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Odaberi jezik</Text>
            <JezikBtn title="Početnik" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Posjedujem određeno predznanje" onPress = { () => {console.log("Klik")} } />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        alignItems: 'center',
        marginTop: 180,
        backgroundColor: Boje.Pozadina,

    },
    naslov: {
        fontSize: 20,
        fontFamily: 'FaunaOne-Regular',
        color: Boje.Naslov,
    }
})

export default Predznanje