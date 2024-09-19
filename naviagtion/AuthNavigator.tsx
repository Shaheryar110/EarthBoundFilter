import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootAuthtackParamList } from '../types/NavigationTypes';
import LoginTypes from '../Screens/Auth/LoginTypes';
import SignUp from '../Screens/Auth/SignUp';
import SignIn from '../Screens/Auth/SignIn';

const RootStack = createNativeStackNavigator<RootAuthtackParamList>();
const AuthNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName="LoginTypes"
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerShown: false,
                animation: 'slide_from_right',
                animationDuration: 300,
            }}>
            <RootStack.Screen name="LoginTypes" component={LoginTypes} />
            <RootStack.Screen name="SignUp" component={SignUp} />
            <RootStack.Screen name="SignIn" component={SignIn} />
        </RootStack.Navigator>
    );
};

export default AuthNavigator;

const styles = StyleSheet.create({});