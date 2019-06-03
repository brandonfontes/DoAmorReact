import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';


import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#04968c"/>
        <Routes />
    </>
) 

export default App;
