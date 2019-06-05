import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, HeaderLogo, Header, FormLogin } from './styles';

import { Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png';

import * as firebase from "firebase";

import { withNavigation } from 'react-navigation';

class AccountLogin extends Component {

    state = {
        isLoading: false,
        email: '',
        password: ''
    }

    /**
     * Logar usuario
     */
    login() {

        alert(this.state.email);

        this.setState({
            isLoading: true
        })
    }

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }
    
    SignUp = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    SignIn = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password);
            this.props.navigation.navigate('Map')
        } catch (error) {
            console.log("Falha no");
        }
    }
    

    render() {
        return (
            <ProfileContainer>
                <Header>
                    <HeaderLogo source={Logo} />
                </Header>
                
                <FormLogin>
                    <Input
                    leftIcon={<Icon name='mail' size={24} color={colors.primary}/>}
                    inputContainerStyle={defaultStyles.inputContainer}
                    placeholder="E-mail" shake={true} keyboardType="email-address"
                    
                    onChangeText={email => this.setState({ email })}/>

                    <Input
                    leftIcon={<Icon name='lock' size={24} color={colors.primary}/>}
                    inputContainerStyle={defaultStyles.inputContainer}
                    placeholder="Senha" shake={true} secureTextEntry={true}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={password => this.setState({ password })}  />

                    <Button
                    buttonStyle={defaultStyles.button.default}
                    title="Logar" loading={this.state.isLoading} onPress={() => this.SignIn(this.state.email, this.state.password)} />

                    <Button
                    buttonStyle={defaultStyles.button.outline}
                    titleStyle={{
                        color: colors.primary, 
                    }}
                    onPress={() => this.props.navigation.navigate('Register', {registerPage: true})}
                    title="Criar Conta Doador" type="outline" />

                    <Button
                    buttonStyle={defaultStyles.button.outline}
                    titleStyle={{
                        color: colors.primary, 
                    }}
                    onPress={() => this.props.navigation.navigate('Register', {registerPage: false})}
                    title="Criar Conta Instituição" type="outline" />
                </FormLogin>
                
            </ProfileContainer>

         );
        };
    }
    
    export default withNavigation(AccountLogin);
    