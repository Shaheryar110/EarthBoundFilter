import { StyleSheet, TextInput, View } from 'react-native'; // Correct import
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Iprops = {
    placeHolder: string;
    iconName: string;
    value: string;
    onChangeText: (text: string) => void;
};

const AuthTextField: React.FC<Iprops> = ({ placeHolder, iconName, value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={value}
                onChangeText={onChangeText}
            />
            <Icon name={iconName} size={20} color="#002558" style={styles.icon} />
        </View>
    );
};

export default AuthTextField;

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
        height: 43,
        fontSize: 14,
        color: '#002558',
        fontFamily: "Poppins-Regular",
        marginTop: 5
    },
    icon: {
        marginLeft: 10,
    },
});
