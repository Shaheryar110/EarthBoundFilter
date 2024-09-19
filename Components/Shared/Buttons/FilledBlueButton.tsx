import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'


type props = {
    name: string;
    onPress?: () => void;
}

const FilledBlueButton: React.FC<props> = ({ name, onPress }) => {
    return (
        <Pressable style={styles.SignUpButton} onPress={onPress} >
            <Text style={styles.textBtn1} >{name}</Text>
        </Pressable>
    )
}

export default FilledBlueButton

const styles = StyleSheet.create({
    SignUpButton: {
        // marginVertical: 25,
        width: 283,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: "#fff",
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 7,
        backgroundColor: "#02A9E8",
        opacity: 0.95,
    },
    textBtn1: {
        fontFamily: "Poppins-Medium",
        color: "white",
        fontSize: 17,
        fontWeight: "700"
    },
})