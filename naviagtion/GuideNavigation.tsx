import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootGuideStackParamList } from '../types/NavigationTypes';
import MainGuide from '../Screens/MainGuide/MainGuide';
import GuideSecond from '../Screens/MainGuide/GuideSecond';
import GuideThird from '../Screens/MainGuide/GuideThird';


const RootStack = createNativeStackNavigator<RootGuideStackParamList>();
const GuideNavigator = ({ onGuideComplete }: { onGuideComplete: () => void }) => {
    return (
        <RootStack.Navigator
            initialRouteName="MainGuide"
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
            <RootStack.Screen
                name="MainGuide"
                component={({ navigation }) => (
                    <MainGuide
                        navigation={navigation}
                        onGuideComplete={onGuideComplete}
                    />
                )}
            />
            <RootStack.Screen
                name="GuideSecond"
                component={({ navigation }) => (
                    <GuideSecond
                        navigation={navigation}
                        onGuideComplete={onGuideComplete}
                    />
                )}
            />
            <RootStack.Screen
                name="GuideThird"
                component={({ navigation }) => (
                    <GuideThird
                        onGuideComplete={onGuideComplete}
                    />
                )}
            />
        </RootStack.Navigator>
    );
};
export default GuideNavigator;
