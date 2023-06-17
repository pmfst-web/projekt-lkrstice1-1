import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const OdabirJezika = ({ route, navigation }) => {

    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Odaberi jezik</Text>
            <JezikBtn 
                title="Engleski" 
                onPress = {() => navigation.navigate('Razlog', {
                    jezik: 'eng'
                })} 
            />
            <JezikBtn 
                title="Njemački" 
                onPress = {() => navigation.navigate('Razlog', {
                    jezik: 'deu'
                })}
            />
            <JezikBtn 
                title="Talijanski" 
                onPress = {() => navigation.navigate('Razlog', {
                    jezik: 'ita'
                })}
            />
            <JezikBtn 
                title="Španjolski" 
                onPress = {() => navigation.navigate('Razlog', {
                    jezik: 'spa'
                })}
            />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        alignItems: 'center',
        marginTop: 150,
    },
    naslov: {
        fontSize: 20,
        fontFamily: 'FaunaOne-Regular',
        color: Boje.Naslov,
    }
})

export default OdabirJezika