import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Boje from '../constants/Boje';

const JezikBtn = (props) => {
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
        backgroundColor: Boje.Jezik,
        width: 340,
        height: 55,
        marginTop: 30,
        borderWidth: 2,
        borderColor: Boje.Bijela
    },
    tekst: {
        color: Boje.Naslov,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default JezikBtn