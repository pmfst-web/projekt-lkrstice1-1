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
        backgroundColor: Boje.Naslov,
        width: 340,
        height: 55,
        marginTop: 30,
        borderRadius: 30
    },
    tekst: {
        color: Boje.Bijela,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default JezikBtn