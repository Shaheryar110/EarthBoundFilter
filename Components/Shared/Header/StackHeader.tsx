import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { CustomHeaderProps } from '../../../types/NavigationTypes';


const StackHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
    return (
        <Pressable style={styles.headerBox} onPress={() => { navigation.goBack() }} >
            <AntDesign name='arrowleft' style={{ fontSize: 30, color: "#042350" }} />
        </Pressable>
    )
}

export default StackHeader;

const styles = StyleSheet.create({
    headerBox: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    notification: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#54A433"
        , alignItems: "center",
        justifyContent: "center"
    }
})