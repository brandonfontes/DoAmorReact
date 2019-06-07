import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, FormLogin, ContainerTitle, Title } from './styles';

import { HeaderLogo, Header } from '~/components/AccountLogin/styles';

import { CheckBox, Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles, fonts } from '~/styles';

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
            address: '',
            latitude: 0,
            longitude: 0,
            phone: ' ',
            email: ' ',
            typeInstitution: 'child',
            donate_food: false, // Campo boleano - Alimento
            donate_constructionMaterial: false, // Campo boleano - Material de construção
            donate_electronic: false, // Campo boleano - Eletrônico
            donate_clothes: false, // Campo boleano - Roupa
            donate_musicalInstruments: false, // Campo boleano - Instrumento musical
            donate_toy: false, // Campo boleano - Brinquedo
            donate_personalHygiene: false, // Campo boleano - Higiene Pessoal
            donate_book: false, // Campo boleano - Livro
            id: '', // Id Usuário
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
                    title: this.state.title, // Nome da instituição
                    description: this.state.description, // Descrição
                    address: this.state.address, // Endereço manual
                    latitude: parseFloat(this.state.latitude), // Latitude
                    longitude: parseFloat(this.state.longitude), // Longitude
                    phone: this.state.phone, // Telefone
                    email: this.state.email, // Email
                    type: this.state.typeInstitution, // Tipo de instituição
                    donate_food: this.state.donate_food, // Alimento
                    donate_constructionMaterial: this.state.donate_constructionMaterial, // Material de Construção
                    donate_electronic: this.state.donate_electronic, // Eletrônico
                    donate_clothes: this.state.donate_clothes, // Roupa
                    donate_musicalInstruments: this.state.donate_musicalInstruments, // Instrumento Musical
                    donate_toy: this.state.donate_toy, // Brinquedo
                    donate_personalHygiene: this.state.donate_personalHygiene, // Higiene Pessoal
                    donate_book: this.state.donate_book, // Livro
                    id: user.uid, // Id Usuário

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

                    {/* dados de usuário */}

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

                    <ContainerTitle>
                        <Title> Dados da instituição </Title>
                    </ContainerTitle>

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
                        keyboardType={'numeric'}
                        onChangeText={phone => this.setState({ phone })} />

                    <ContainerTitle>
                        <Title> Aceitamos doação de: </Title>
                    </ContainerTitle>
                    
                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Alimento'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_food}
                        onPress={() => this.setState({ donate_food: !this.state.donate_food })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Material de Construção'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_constructionMaterial}
                        onPress={() => this.setState({ donate_constructionMaterial: !this.state.donate_constructionMaterial })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Eletrônico'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_electronic}
                        onPress={() => this.setState({ donate_electronic: !this.state.donate_electronic })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Roupa'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_clothes}
                        onPress={() => this.setState({ donate_clothes: !this.state.donate_clothes })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Instrumento Musical'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_musicalInstruments}
                        onPress={() => this.setState({ donate_musicalInstruments: !this.state.donate_musicalInstruments })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Brinquedo'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_toy}
                        onPress={() => this.setState({ donate_toy: !this.state.donate_toy })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Higiene Pessoal'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_personalHygiene}
                        onPress={() => this.setState({ donate_personalHygiene: !this.state.donate_personalHygiene })}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Livro'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.donate_book}
                        onPress={() => this.setState({ donate_book: !this.state.donate_book })}
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
