import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { ProfileContainer, FormLogin, ContainerTitle, Title } from './styles';

import { HeaderLogo, Header } from '~/components/AccountLogin/styles';

import { CheckBox, Button, Input } from 'react-native-elements';

import { colors, metrics, defaultStyles, fonts } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo2-verde.png';

import { getUser } from '~/services/institutions';

import * as firebase from "firebase";

import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

class EditDonor extends Component {
    


    componentDidMount() {
        getUser(this.props.navigation.getParam('id')).on('value', snap => {
            this.setState({
                user: snap.val()
            });
        })
    }

    componentWillUnmount() {
        this.setState({
            user: {}
        })
    }
        state = {
            isLoading: false,
            user: {},
        };


    login() {
        this.setState({
            isLoading: true
        })
    }

    Update = () => {
        this.setState({ isLoading: true });

        firebase.database().ref('users/' + this.state.user.id).update(this.state.user)

        alert('Perfil atualizado com sucesso!');
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
                        leftIcon={<Icon name='person' size={24} color={colors.primary} />}
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Nome"
                        defaultValue={this.state.user.name}
                        onChangeText={name => this.setState(prevState => ({ user: { ...prevState.user, name: name } }))} />

                    <Input
                        leftIcon={<Icon name='date-range' size={24} color={colors.primary} />}
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Data de nascimento"
                        defaultValue={this.state.user.birthdate}
                        onChangeText={birthdate => this.setState(prevState => ({ user: { ...prevState.user, birthdate: birthdate } }))} />

                    <Input
                        leftIcon={<Icon name='people' size={24} color={colors.primary} />}
                        inputContainerStyle={defaultStyles.inputContainer}
                        placeholder="Sexo"
                        defaultValue={this.state.user.gender}
                        onChangeText={gender => this.setState(prevState => ({ user: { ...prevState.user, gender: gender } }))} />


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


export default withNavigation(EditDonor);
