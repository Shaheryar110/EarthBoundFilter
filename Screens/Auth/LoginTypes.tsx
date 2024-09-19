import { Button, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../Components/App/Block'
import AntDesign from "react-native-vector-icons/AntDesign"
import { LoginTypesList } from '../../types/NavigationTypes'
import { onGoogleButtonPress } from '../../Services/Auth'

const { height } = Dimensions.get('window');

const LoginTypes: React.FC<LoginTypesList> = ({ navigation }) => {
    const handleSignUpPress1 = () => {
        navigation.navigate('SignUp');
    };
    const handleSignUpPress = () => {
        navigation.navigate('SignIn');
    };
    const googleSignIn = () => {
        onGoogleButtonPress().then(data => console.log(data, 'success'));
    };
    return (
        <Block
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.main}>
                <Image
                    source={require('../../assets/img/authB.png')}
                    style={styles.logoAbs}
                />
                <Image
                    source={require('../../assets/img/authB2.png')}
                    style={styles.logoAbs1}
                />
                <Image
                    source={require('../../assets/img/logo.png')}
                    style={styles.logo}
                />
                <Pressable style={styles.signInButton} onPress={handleSignUpPress}  >
                    <Text style={styles.textBtn} >SIGN IN</Text>
                </Pressable>
                <Pressable style={styles.SignUpButton} onPress={handleSignUpPress1} >
                    <Text style={styles.textBtn1} >SIGN UP</Text>
                </Pressable>

                <Text style={styles.t1}>LOGIN WITH SOCIAL MEDIA </Text>
                <Pressable style={styles.socilaBox} onPress={googleSignIn} >
                    <View style={styles.singleBox} ><AntDesign name='google' style={styles.icon} /></View>
                </Pressable>
            </View>
        </Block>
    )
}

export default LoginTypes


const styles = StyleSheet.create({
    main: {
        flex: 1,
        // display: "flex",
        // flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        width: "100%",
        height: height
    },
    logo: {
        width: 200,
        height: 200,
        objectFit: "contain",
    },
    logoAbs: {
        width: 400,
        height: 100,
        objectFit: "contain",
        position: "absolute",
        right: -10,
        top: 0
    },
    logoAbs1: {
        width: 500,
        height: 200,
        objectFit: "contain",
        position: "absolute",
        left: -10,
        top: height - 150
    },
    t1: {
        fontWeight: '600',
        color: 'black'
        , marginTop: 50
    },
    white: {
        color: 'white',
        fontWeight: '600',
    },
    signInButton: {
        marginVertical: 25,
        width: 280,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: "grey",
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 7,
        backgroundColor: "white",
        opacity: 0.8,

    },
    textBtn: {
        fontFamily: "Poppins-Medium",
        color: "#002558",
        fontSize: 17,
        fontWeight: "700"
    },
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
    socilaBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginVertical: 20
    },
    singleBox: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        elevation: 8,
        backgroundColor: "white",
        opacity: 0.8,
    },
    icon: {
        fontSize: 30,

    }
});