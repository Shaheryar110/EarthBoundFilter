import { StyleSheet, Text, View, Button, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootGuideStackParamList } from '../../types/NavigationTypes';

type MainGuideProps = {
    navigation: StackNavigationProp<RootGuideStackParamList, 'GuideThird'>;
    onGuideComplete: () => void;
};

const GuideSecond: React.FC<MainGuideProps> = ({ onGuideComplete, navigation }) => {
    const completeGuide = async () => {
        await AsyncStorage.setItem('guideCompleted', 'true');
        onGuideComplete();
    };

    return (
        <ImageBackground source={require("../../assets/img/g22.png")} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.btnGrp} >
                    <Pressable style={[styles.signInButton, { backgroundColor: "transparent", borderColor: "#02A9E8" }]} onPress={completeGuide}  >
                        <Text style={[styles.textBtn, { color: "#02A9E8" }]} >SKIP</Text>
                    </Pressable>
                    <Pressable style={[styles.signInButton, { backgroundColor: "#02A9E8", borderColor: "#02A9E8", borderWidth: 2 }]} onPress={() => { navigation.navigate('GuideThird') }}  >
                        <Text style={[styles.textBtn, { color: "white" }]} >NEXT</Text>
                    </Pressable>


                </View>
            </View>
        </ImageBackground>
    );
};

export default GuideSecond;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,

    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "relative",
        paddingBottom: 70
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    btnGrp: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginVertical: 25,

    },
    signInButton: {
        width: 100,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: "grey",
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        elevation: 7,
        backgroundColor: "white",
        opacity: 0.9,

    },
    textBtn: {
        fontFamily: "Poppins-Medium",
        color: "#002558",
        fontSize: 17,
    },
});