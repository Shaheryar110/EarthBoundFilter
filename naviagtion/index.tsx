import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSliceIntialState } from '../redux/user/slice';
import { StoreDispatch, StoreState } from '../redux/reduxStore';
import auth, { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GuideNavigator from './GuideNavigation';

const AppContainer = () => {
    const dispatch = useDispatch<StoreDispatch>();
    const [showGuide, setShowGuide] = useState(true);
    const userData = useSelector((state: StoreState) => state.user);
    function onAuthStateChanged(user: any) {
        if (user) {
            dispatch(
                userActions.setUser({
                    email: user?.email,
                    fullName: user?.displayName || '',
                    creationTime: user?.creationTime || 0,
                    uid: user?.uid,
                }),
            );
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                setShowGuide(false); // Show guide for new users
            }
        } else {
            dispatch(userActions.setUser(userSliceIntialState));
            setShowGuide(true);
        }
    }

    const handleGuideCompletion = async () => {
        await AsyncStorage.setItem('guideCompleted', 'true');
        setShowGuide(true); // Move to the main app after guide completion
    };

    useEffect(() => {
        const checkGuideStatus = async () => {
            const guideCompleted = await AsyncStorage.getItem('guideCompleted');
            console.log(guideCompleted, 'guideCompleted');

            if (guideCompleted) {
                setShowGuide(true);
            }
        };

        checkGuideStatus();

        try {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber; // unsubscribe on unmount
        } catch (err) {
            console.log(err, 'err or');

        }
    }, []);
    return (
        <NavigationContainer>
            {userData?.uid ? (
                !showGuide ? (
                    <GuideNavigator onGuideComplete={handleGuideCompletion} />
                ) : (
                    <AppNavigator />
                )
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    )
}

export default AppContainer
