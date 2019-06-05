import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, FormLogin } from './styles';

import { HeaderLogo, Header } from '~/components/AccountLogin/styles';

import { Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png';

import * as firebase from "firebase";

import { withNavigation } from 'react-navigation';

 class RegisterDonor extends Component {

    state = {
        isLoading: false,
        name: '',
        email: '',
        password: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: "",
            password: "",
        };
      }
    
    SignUp = (email, password) => {
        try {
            
            firebase.auth().createUserWithEmailAndPassword(email, password);
            firebase.auth().onAuthStateChanged(user => {
                this.setState({isLoading: true});
                alert('Usuário cadastrado com sucesso!');
                firebase.database().ref('users/' + user.uid).set({
                    name: this.state.name,
                    email: this.state.email,
                    date: '01/01/1919',
                    sex: 'N/A',
                    type: 'donor',
                });
             });
            this.props.navigation.navigate('Profile');
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    
    render() {
        return (
            <ProfileContainer>
                <Header>
                    <HeaderLogo source={Logo} />
                </Header>
                
                <FormLogin>
                    <Input
                    leftIcon={<Icon name='person' size={24} color={colors.primary}/>}
                    inputContainerStyle={defaultStyles.inputContainer}
                    placeholder="Nome" shake={true} 
                    
                    onChangeText={name => this.setState({ name })}/>

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
                    title="Criar conta" loading={this.state.isLoading} onPress={() => this.SignUp(this.state.email, this.state.password)} />

                    <Button
                    buttonStyle={defaultStyles.button.outline}
                    titleStyle={{
                        color: colors.primary, 
                    }}
                    onPress={() => this.props.navigation.navigate('Profile')}
                    title="Voltar" type="outline" />
                </FormLogin>
                
            </ProfileContainer>
        );
    };
}

export default withNavigation(RegisterDonor);
