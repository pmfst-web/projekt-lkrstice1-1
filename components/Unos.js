import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Unos = (props) => {
    return(
        <View style={stil.ekran}>
            <TextInput {...props} style={stil.unos} placeholder="Unesi prijevod" ></TextInput>
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        paddingBottom: 50
    },
    unos: {
        borderBottomWidth: 1,
        borderColor: '#000000',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    }
})

export default Unos