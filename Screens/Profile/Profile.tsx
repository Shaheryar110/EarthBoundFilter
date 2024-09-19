import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/reduxStore';
import Block from '../../Components/App/Block';
import { firebase } from '@react-native-firebase/auth';
import { Toast } from 'react-native-toast-notifications';
import { RootStackParamListAPP, SettingsScreenProps } from '../../types/NavigationTypes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { logOut } from '../../Services/Auth';

const Profile: React.FunctionComponent<SettingsScreenProps> = ({
    navigation,
}) => {
    const userData = useSelector((state: StoreState) => state.user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                Toast.show('Error in Logout ', { type: 'error' });
            });
    };

    type PageDataType = {
        text: string;
        url: keyof RootStackParamListAPP;
        icon: React.ReactNode;
    };
    const pagesData: PageDataType[] = [
        {
            text: 'Accounts',
            url: 'accounts',
            icon: <FontAwesome name="user" style={styles.iconStyle} />,
        },

    ];


    return (
        <Block
            source={require('../../assets/img/back.png')}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 90,
            }}
            paddingBottom={100}>
            <Image
                style={styles.avatar}
                source={{
                    uri: firebase.auth().currentUser?.photoURL || 'https://firebasestorage.googleapis.com/v0/b/earth-bound-bd7e2.appspot.com/o/images.jfif?alt=media&token=aa0a578e-9ed1-4efd-8ff1-d2330cdcbf5e',
                }}
            />
            {userData?.fullName && <Text style={[styles.text, { fontWeight: '700' }]}>
                {userData?.fullName}
            </Text>}
            <Text style={styles.text}>{userData?.email}</Text>
            <View style={styles.pagesBox}>
                {pagesData.map((item, index) => {
                    return (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(item.url);
                            }}
                            style={styles.singlePage}
                            key={index}>
                            {item.icon}
                            <Text style={styles.pageText}>{item.text}</Text>
                        </Pressable>
                    );
                })}
            </View>
            <Pressable style={styles.SignUpButton} onPress={handleLogOut} >
                <Text style={styles.textBtn1} >LOGOUT</Text>
            </Pressable>
        </Block>
    );
};

export default Profile

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        marginVertical: 20,
        borderRadius: 50,
    },
    text: {
        color: 'black' || 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
    },
    pagesBox: {
        paddingVertical: 20,
        width: '100%',
        paddingHorizontal: 30,
    },
    singlePage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        paddingBottom: 10,
        paddingTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    pageText: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
    },
    iconStyle: { color: 'black', fontSize: 20 },
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
        backgroundColor: "#53A332",
        opacity: 0.95,
    },
    textBtn1: {
        fontFamily: "Poppins-Medium",
        color: "white",
        fontSize: 17,
        fontWeight: "700"
    },
});