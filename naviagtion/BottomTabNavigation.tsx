import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  RootBottomTabParams,
  RootStackParamListAPP,
} from '../types/NavigationTypes';
import Header from '../Components/Shared/Header/Header';
import Home from '../Screens/HomeScreen/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Menu from '../Screens/Menu/Menu';
import Heart from '../Screens/Heart/Heart';
import Profile from '../Screens/Profile/Profile';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import ScheduleModal from '../Components/Shared/Header/ScheduleModal';
import Gallery from '../Screens/Gallery/Gallery';

const Tab = createBottomTabNavigator<RootBottomTabParams>();

const BottomTabNavigation = () => {
  const navigationCustom =
    useNavigation<StackNavigationProp<RootStackParamListAPP>>();

  return (
    <Tab.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => (
          <Header navigation={navigationCustom} />
        ),
        tabBarInactiveTintColor: '#C5D8BE',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#53A332',
          borderRadius: 15,
          height: 60,
          overflow: 'hidden',
          width: '90%',
          bottom: 10,
          left: '5%',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {marginBottom: 10},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={30} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {marginBottom: 10},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={29}
            />
          ),
        }}
        name="Menu"
        component={ScheduleModal}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {marginBottom: 10},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="contacts-outline"
              color={color}
              size={30}
            />
          ),
        }}
        name="Heart"
        component={Heart}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {marginBottom: 10},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="images" color={color} size={30} />
          ),
        }}
        name="Gallery"
        component={Gallery}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {marginBottom: 10},
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-o" color={color} size={30} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
