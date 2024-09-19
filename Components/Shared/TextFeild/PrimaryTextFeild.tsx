import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
type Iprops = {
    placeHolder: string;
    value: string;
    onChangeText: (text: string) => void;
    editable?: boolean;
};

const PrimaryTextFeild: React.FC<Iprops> = ({ placeHolder, value, onChangeText, editable }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={value}
                onChangeText={onChangeText}
                editable={editable}
            />
        </View>
    )
}

export default PrimaryTextFeild

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#002558',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 5,
        width: 283
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 14,
        color: '#002558',
        fontFamily: "Poppins-Regular"
    },

});