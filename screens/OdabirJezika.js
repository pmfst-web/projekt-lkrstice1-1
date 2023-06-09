import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const OdabirJezika = () => {
    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Odaberi jezik</Text>
            <JezikBtn title="Engelski jezik" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Njemački jezik" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Talijanski jezik" onPress = { () => {console.log("Klik")} } />
            <JezikBtn title="Njemački jezik" onPress = { () => {console.log("Klik")} } />
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

export default OdabirJezika