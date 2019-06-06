import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, FormLogin, ContainerTitle, Title } from './styles';

import { HeaderLogo, Header } from '~/components/AccountLogin/styles';

import { CheckBox, Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles, fonts } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png';

import * as firebase from "firebase";

import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

class EditInstitution extends Component {
    
    constructor(props) {

        super(props);

        const { institutionInfo } = this.props;

        this.state = {
            isLoading: false,
            name: institutionInfo.title,
            title: institutionInfo.title,
            description: institutionInfo.description,
            address: institutionInfo.address,
            latitude: institutionInfo.latitude,
            longitude: institutionInfo.longitude,
            phone: institutionInfo.phone,
            email: institutionInfo.email,
            typeInstitution: institutionInfo.typerInstitution,
            donate_food: institutionInfo.donate_food, // Campo boleano - Alimento
            donate_constructionMaterial: institutionInfo.donate_constructionMaterial, // Campo boleano - Material de construção
            donate_electronic: institutionInfo.donate_electronic, // Campo boleano - Eletrônico
            donate_clothes: institutionInfo.donate_clothes, // Campo boleano - Roupa
            donate_musicalInstruments: institutionInfo.donate_musicalInstruments, // Campo boleano - Instrumento musical
            donate_toy: institutionInfo.donate_toy, // Campo boleano - Brinquedo
            donate_personalHygiene: institutionInfo.donate_personalHygiene, // Campo boleano - Higiene Pessoal
            donate_book: institutionInfo.donate_book, // Campo boleano - Livro
            id: institutionInfo.title, // Id Usuário
        }
    }

    login() {
        this.setState({
            isLoading: true
        })
    }

   

    render() {

        const { institutionInfo } = this.props;

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
                        value="a"
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

EditInstitution.propTypes = {
    institutionInfo: PropTypes.object.isRequired
}

export default withNavigation(EditInstitution);
