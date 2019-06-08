import React, { Component } from 'react';

import { Text, View , Picker} from 'react-native';

import { ProfileContainer, FormLogin, ContainerTitle, Title } from './styles';

import { HeaderLogo, Header } from '~/components/AccountLogin/styles';

import { CheckBox, Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles, fonts } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png';

import { getInstitution } from '~/services/institutions';

import * as firebase from "firebase";

import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

class EditInstitution extends Component {
    


    componentDidMount() {
        getInstitution(this.props.navigation.getParam('id')).on('value', snap => {
            this.setState({
                institution: snap.val()
            });
        })
    }

    componentWillUnmount() {
        this.setState({
            institution: {}
        })
    }
    
    state = {
        isLoading: false,
        institution: {},
    };


    login() {
        this.setState({
            isLoading: true
        })
    }

    Update = () => {
        this.setState({ isLoading: true });

        firebase.database().ref('institutions/' + this.state.institution.id).update(this.state.institution)

        alert('Instituição atualizada com sucesso!');
        this.props.navigation.navigate('Profile');

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
                        defaultValue={this.state.institution.email}
                        disabled={true}
                        />

                    {/* dados da instituição */}

                    <ContainerTitle>
                        <Title> Dados da instituição </Title>
                    </ContainerTitle>

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Nome da instituição"
                        defaultValue={this.state.institution.title}
                        onChangeText={title => this.setState(prevState => ({ institution: { ...prevState.institution, title: title } }))} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Sobre a instituição"
                        defaultValue={this.state.institution.description}
                        onChangeText={description => this.setState(prevState => ({ institution: { ...prevState.institution, description: description } }))} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Endereço da instituição"
                        defaultValue={this.state.institution.address}
                        onChangeText={address => this.setState(prevState => ({ institution: { ...prevState.institution, address: address } }))} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Geolocalização da instituição - latitude"
                        defaultValue={' ' + this.state.institution.latitude}
                        onChangeText={latitude => this.setState(prevState => ({ institution: { ...prevState.institution, latitude: latitude } }))} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Geolocalização da instituição - longitude"
                        defaultValue={' ' + this.state.institution.longitude}
                        onChangeText={longitude => this.setState(prevState => ({ institution: { ...prevState.institution, longitude: longitude } }))} />

                    <Input
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Telefone da instituição"
                        defaultValue={this.state.institution.phone}
                        keyboardType={'numeric'}
                        onChangeText={phone => this.setState(prevState => ({ institution: { ...prevState.institution, phone: phone } }))} />

                
                    <Picker
                        style={defaultStyles.inputDefault}
                        selectedValue={this.state.institution.type}
                        onValueChange={(itemValue, itemIndex) => 
                            this.setState(
                                prevState => (
                                    { 
                                        institution: { 
                                            ...prevState.institution, type: itemValue 
                                        } 
                                    }
                                )
                            )
                        }>

                        <Picker.Item label="Crianças" value="child" />
                        <Picker.Item label="Familia" value="family" />
                        <Picker.Item label="Sangue" value="blood" />
                        <Picker.Item label="Abrigo" value="shelter" />
                        <Picker.Item label="Pessoas com deficiencia" value="deficient" />
                    </Picker>

                    <ContainerTitle>
                        <Title> Aceitamos doação de: </Title>
                    </ContainerTitle>
                    
                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Alimento'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_food}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_food: !this.state.institution.donate_food
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Material de Construção'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_constructionMaterial}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_constructionMaterial: !this.state.institution.donate_constructionMaterial
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Eletrônico'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_electronic}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_electronic: !this.state.institution.donate_electronic
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Roupa'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_clothes}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_clothes: !this.state.institution.donate_clothes
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Instrumento Musical'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_musicalInstruments}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_musicalInstruments: !this.state.institution.donate_musicalInstruments
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Brinquedo'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_toy}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_toy: !this.state.institution.donate_toy
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Higiene Pessoal'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_personalHygiene}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_personalHygiene: !this.state.institution.donate_personalHygiene
                                        }
                                    }
                                )
                            )}
                    />

                    <CheckBox
                        checkedColor={colors.primary}
                        uncheckedColor={colors.primary}
                        title='Livro'
                        textStyle={{fontSize: fonts.CheckBox, color: 'gray', fontWeight: 'normal'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        checked={this.state.institution.donate_book}
                        onPress={() =>
                            this.setState(
                                prevState => (
                                    {
                                        institution: {
                                            ...prevState.institution, donate_book: !this.state.institution.donate_book
                                        }
                                    }
                                )
                            )}
                    />


                    <Button
                        buttonStyle={defaultStyles.button.default}
                        title="Atualizar" loading={this.state.isLoading} onPress={() => this.Update()} />

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


export default withNavigation(EditInstitution);
