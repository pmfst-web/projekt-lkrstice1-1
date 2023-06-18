import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Boje from "../constants/Boje";
import JezikBtn from "../components/JezikBtn";

const Razlog = ({ route, navigation }) => {
    const { jezik } = route.params
    return(
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Razlog</Text>
            <JezikBtn 
                title="Prijatelji/obitelj" 
                onPress = { () => {navigation.navigate('Predznanje', {
                    razlog: 'obitelj',
                    jezik
                })} } 
            />
            <JezikBtn 
                title="Posao/škola" 
                onPress = {() => {navigation.navigate('Predznanje', {
                    razlog: 'posao',
                    jezik
                })}}
            />
            <JezikBtn title="Hobi" 
                onPress = {() => {navigation.navigate('Predznanje', {
                    razlog: 'hobi',
                    jezik
                })}} 
            />
            <JezikBtn 
                title="Ostalo" 
                onPress = {() => {navigation.navigate('Predznanje', {
                    razlog: 'ostalo',
                    jezik
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
        fontSize: 30,
        fontFamily: 'FaunaOne-Regular',
        color: Boje.Naslov,
    }
})

export default Razlog