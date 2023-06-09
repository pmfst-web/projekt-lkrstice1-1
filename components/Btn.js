import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Boje from "../constants/Boje";

const Btn = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...stil.tipka, ...props.style}}>
                <Text style={stil.tekst}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stil = StyleSheet.create({
    tipka: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Boje.Tipka,
        width: 200,
        height: 50,
    },
    tekst: {
        color: Boje.Bijela,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Btn