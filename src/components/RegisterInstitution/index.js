import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, FormLogin } from './styles';

import { HeaderLogo, Header } from '~/components/AccountLogin/styles';

import { CheckBox, Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png';

import * as firebase from "firebase";

import { withNavigation } from 'react-navigation';

class RegisterInstitution extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            name: ' ',
            description: ' ',
            address: ' ',
            latitude: ' ',
            longitude: ' ',
            phone: ' ',
            email: ' ',
            typeInstitution: 'CHILDREN',
            donate_food: false, // campo boleano
            donate_toy: false // campo boleano
        }
    }

    login() {
        alert(this.state.email);

        this.setState({
            isLoading: true
        })
    }

    SignUp = (email, password) => {
        this.setState({ isLoading: true });

        firebase.auth().createUserWithEmailAndPassword(email, password);

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.database().ref('users/' + user.uid).set({
                    name: this.state.title,
                    type: 'institution',
                });

                firebase.database().ref('institutions/' + user.uid).set({
                    title: this.state.title,
                    description: this.state.description,
                    address: this.state.address,
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    phone: this.state.phone,
                    email: this.state.email,
                    type: this.state.typeInstitution,
                    donate_food: this.state.donate_food,
                    donate_toy: this.state.donate_toy
                });

                alert('Usuário cadastrado com sucesso!');
                this.props.navigation.navigate('Profile');
            }
        });
    };


    render() {
        return (
            <ProfileContainer>
                <Header>
                    <HeaderLogo source={Logo} />
                </Header>

                <FormLogin>
                    <Input
                        leftIcon={<Icon name='mail' size={24} color={colors.primary} />}
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="E-mail" shake={true} keyboardType="email-address"

                        onChangeText={email => this.setState({ email })} />

                    <Input
                        leftIcon={<Icon name='lock' size={24} color={colors.primary} />}
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Senha" shake={true} secureTextEntry={true}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={password => this.setState({ password })} />


                    {/* dados da instituição */}

                    <Text> Dados da instituição </Text>

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Nome da instituição"
                        onChangeText={title => this.setState({ title })} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Sobre a instituição"
                        onChangeText={description => this.setState({ description })} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Endereço da instituição"
                        onChangeText={address => this.setState({ address })} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Geolocalização da instituição - latitude"
                        onChangeText={latitude => this.setState({ latitude })} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Geolocalização da instituição - longitude"
                        onChangeText={longitude => this.setState({ longitude })} />


                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Telefone da instituição"
                        onChangeText={phone => this.setState({ phone })} />


                    <Text> Aceitamos doação de: </Text>


                    <CheckBox
                        title='Alimento'
                        checked={this.state.donate_food}
                        onPress={() => this.setState({ donate_food: !this.state.donate_food })}
                    />

                    <CheckBox
                        title='Brinquedo'
                        checked={this.state.donate_toy}
                        onPress={() => this.setState({ donate_toy: !this.state.donate_food })}
                    />


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

export default withNavigation(RegisterInstitution);
