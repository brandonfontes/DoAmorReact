import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, Button } from 'react-native';

// Styles
// import { Container } from './styles';

/**
 * Detalhe do atendimento
 */
class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

};

export default Login;
