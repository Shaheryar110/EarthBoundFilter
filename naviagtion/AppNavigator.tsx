import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListAPP } from '../types/NavigationTypes';
import BottomTabNavigation from './BottomTabNavigation';
import Home from '../Screens/HomeScreen/Home';
import FlatHvacFilter from '../Screens/FlatHvacFilter/FlatHvacFilter';
import StackHeader from '../Components/Shared/Header/StackHeader';
import Cart from '../Screens/Cart/Cart';
import Header from '../Components/Shared/Header/Header';
import Accounts from '../Screens/Accounts/Accounts';
import VentFilters from '../Screens/VentFilters/VentFilters';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamListAPP>();
    return (
        <Stack.Navigator
            initialRouteName="BottomTab"
            screenOptions={({ route }) => ({
                headerShown: route.name === 'FlatHvacFilter' || route.name === 'cart',
                tabBarHideOnKeyboard: true,
                animation: 'slide_from_right',
                animationDuration: 300,
            })}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
            <Stack.Screen name="FlatHvacFilter" component={FlatHvacFilter} options={({ navigation }) => ({
                headerShown: true,
                header: () => <StackHeader navigation={navigation} />,
            })} />
            <Stack.Screen name="VentFilter" component={VentFilters} options={({ navigation }) => ({
                headerShown: true,
                header: () => <StackHeader navigation={navigation} />,
            })} />
            <Stack.Screen name="cart" component={Cart} options={({ navigation }) => ({
                headerShown: true,
                header: () => <StackHeader navigation={navigation} />,
            })} />
            <Stack.Screen name="accounts" component={Accounts} options={({ navigation }) => ({
                headerShown: true,
                header: () => <StackHeader navigation={navigation} />,
            })} />
        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})