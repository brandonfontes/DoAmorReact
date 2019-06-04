import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, HeaderLogo, Header, FormLogin } from './styles';

import { Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png'

export default class AccountLogin extends Component {

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
                    onChangeText={(value) => this.setState({ email: value })} />

                    <Input
                    leftIcon={<Icon name='lock' size={24} color={colors.primary}/>}
                    inputContainerStyle={defaultStyles.inputContainer}
                    placeholder="Senha" shake={true} secureTextEntry={true}
                    onChangeText={(value) => this.setState({ password: value })}  />

                    <Button
                    buttonStyle={defaultStyles.button.default}
                    title="Logar" loading={this.state.isLoading} onPress={
                        () => this.login() 
                    } />

                    <Button
                    buttonStyle={defaultStyles.button.outline}
                    titleStyle={{
                        color: colors.primary, 
                    }}
                    title="Criar Conta Doador" type="outline" />

                    <Button
                    buttonStyle={defaultStyles.button.outline}
                    titleStyle={{
                        color: colors.primary, 
                    }}
                    title="Criar Conta Instituição" type="outline" />
                </FormLogin>
                
            </ProfileContainer>
        )
    }
}
