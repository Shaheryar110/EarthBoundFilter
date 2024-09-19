/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import AppContainer from './naviagtion';
import { ToastProvider } from 'react-native-toast-notifications'
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './redux/reduxStore';


function App(): React.JSX.Element {


  return (
    <ReduxProvider store={reduxStore}>
      <SafeAreaView style={{ flex: 1 }} >
        <ToastProvider>
          <AppContainer />
        </ToastProvider>
      </SafeAreaView>
    </ReduxProvider>
  );
}



export default App;
