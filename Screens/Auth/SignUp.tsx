import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Block from '../../Components/App/Block'
import AntDesign from "react-native-vector-icons/AntDesign"
import { createUser, onGoogleButtonPress } from '../../Services/Auth'
import AuthTextFeild from '../../Components/Shared/TextFeild/AuthTextFeild'
import FilledBlueButton from '../../Components/Shared/Buttons/FilledBlueButton'
import { SignUpScreenProps } from '../../types/NavigationTypes'
const { height } = Dimensions.get('window');

const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (field: keyof typeof formData) => (value: string) => {

        setFormData(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSignUpPress = () => {
        if (formData.email !== '' && formData.password !== '') {
            createUser(
                formData.email,
                formData.password,
                formData.fullName,
            );
        }
    };
    const googleSignIn = () => {
        onGoogleButtonPress().then(data => console.log(data, 'success'));
    };
    return (
        <Block
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.main}>
                <Pressable style={{
                    position: "absolute", top: 15, left: 15, zIndex: 99
                }} onPress={() => { navigation.goBack() }} >

                    <AntDesign name='arrowleft' style={{ fontSize: 30 }} />
                </Pressable>
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

                <AuthTextFeild iconName='person' placeHolder='Full Name' value={formData.fullName}
                    onChangeText={handleInputChange('fullName')} />
                <AuthTextFeild iconName='email' placeHolder='Email' value={formData.email}
                    onChangeText={handleInputChange('email')} />
                <AuthTextFeild iconName='remove-red-eye' placeHolder='Password' value={formData.password}
                    onChangeText={handleInputChange('password')} />
                <FilledBlueButton name='SIGN UP' onPress={handleSignUpPress} />
                <Text style={styles.t1}>Already Have an account? <Pressable onPress={() => { navigation.navigate('SignIn') }}  ><Text style={{
                    color: 'black', fontWeight: "600"
                }}>Sign In</Text></Pressable></Text>
                {/* <Text style={styles.t1}>LOGIN WITH SOCIAL MEDIA </Text> */}
                <Pressable style={styles.socilaBox} onPress={googleSignIn} >
                    <View style={styles.singleBox} ><AntDesign name='google' style={styles.icon} /></View>
                </Pressable>
            </View>
        </Block>
    )
}

export default SignUp


const styles = StyleSheet.create({
    main: {
        flex: 1,
        // display: "flex",
        // flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: "relative",
        width: "100%",
        height: height
    },
    logo: {
        width: 200,
        height: 200,
        objectFit: "contain",
    },
    t1: {
        fontWeight: '600',
        color: 'black'
        , marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
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

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 20
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    icon1: {
        marginLeft: 10,
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
});