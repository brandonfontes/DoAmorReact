import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Map from '~/pages/Map';
import Profile from '~/pages/Profile';
import Institution from '~/pages/Institution';
import Login from '~/pages/Login';
import AuthLoadingScreen from '~/pages/AuthLoadingScreen';
import Register from '~/pages/Register';
import Edit from '~/pages/Edit';
import About from '~/pages/About';


import { colors, metrics } from '~/styles';
// -- 
const AppStack = createAppContainer(createStackNavigator({ Map, Main, Profile, Institution, Register, Edit, About }, {
    defaultNavigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: colors.primary,
            borderBottomColor: '#ffffff',
            elevation: metrics.elevation,
        },
        headerTitleStyle: {
            fontSize: 18,
        },
    }
}));
// --
const AuthStack = createStackNavigator({ Login });
// Rotas
const Routes = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'App',
    }
));

export default Routes;
