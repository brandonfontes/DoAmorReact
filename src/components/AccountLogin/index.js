import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer } from './styles';

import { Button, Input } from 'react-native-elements';

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

                <Input label="E-mail" keyboardType="email-address" onChangeText={(value) => this.setState({ email: value })} />
                <Input label="Senha" style={{ marginBottom: 15 }} onChangeText={(value) => this.setState({ password: value })} />

                <Button title="Logar" loading={this.state.isLoading} style={{ marginTop: 15, marginBottom: 15 }} onPress={
                    () => this.login()
                } />

                <Button title="Criar Conta" type="outline" style={{ marginTop: 15 }} />
            </ProfileContainer>
        )
    }
}
