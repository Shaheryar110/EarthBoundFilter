import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

interface RadioButtonProps {
    selected: boolean;
    onPress: () => void;
    label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress, label }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.circle, selected && styles.selectedCircle]} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    circle: {
        width: 17,
        height: 17,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
    },
    selectedCircle: {
        borderColor: '#3E9B13',
        backgroundColor: "black",
    },
    label: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
});

export default RadioButton;