import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const OdabirJezika = ({ route, navigation }) => {

    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Odaberi jezik</Text>
            <JezikBtn 
                title="Engelski jezik" 
                onPress = {() => navigation.navigate('Razlog', {
                    jezik: 'eng'
                })} 
            />
            <JezikBtn 
                title="Njemački jezik" 
                onPress = {() => {console.log("Klik", {
                    jezik: 'deu'
                })}} 
            />
            <JezikBtn 
                title="Talijanski jezik" 
                onPress = {() => {console.log("Klik",{
                    jezik: 'ita'
                })}} 
            />
            <JezikBtn 
                title="Španjolski jezik" 
                onPress = {() => {console.log("Klik",{
                    jezik: 'spa'
                })}} 
            />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        alignItems: 'center',
        marginTop: 180,
    },
    naslov: {
        fontSize: 20,
        fontFamily: 'FaunaOne-Regular',
        color: Boje.Naslov,
    }
})

export default OdabirJezika