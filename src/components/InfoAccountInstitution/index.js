import React, { Component } from 'react';

import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

import { colors, metrics } from '~/styles';

import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo, Title, HeaderInstitution, TitleHeader, HeaderImage } from './styles';

import ImageInstitution from '~/assets/header-institution.jpeg'

import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';

export default class InfoAccountInstitution extends Component {

    _loggout() {
        firebase.auth().signOut().then(function () {
            alert('Até mais, volte sempre');
        }).catch(function (error) {
            alert('Falha ao deslogar, tente novamente')
        });
    }


    render() {
        return (
            <ProfileContainer>
                <HeaderInstitution source={ImageInstitution}>
                    <HeaderImage />
                    <Icon name='home' size={metrics.iconPrimary} color={colors.light} />
                    <TitleHeader>
                        Teste
                    </TitleHeader>
                </HeaderInstitution>
                <ProfileInfo>
                    <ListItem
                        title={"Perfil da instituição"}
                        leftIcon={{ name: 'home' }}
                        chevron
                        topDivider
                    />
                    <ListItem
                        title={"Editar perfil"}
                        leftIcon={{ name: 'edit' }}
                        chevron
                        topDivider
                    />
                    <ListItem
                        title={"Dashboard"}
                        leftIcon={{ name: 'donut-small' }}
                        chevron
                        topDivider
                    />
                    <ListItem
                        title={"Sobre"}
                        leftIcon={{ name: 'info' }}
                        chevron
                        topDivider
                    />
                    <ListItem
                        title={"Sair da conta"}
                        leftIcon={{ name: 'power-settings-new' }}
                        chevron
                        topDivider
                        onPress={() => this._loggout()}
                    />
                </ProfileInfo>
            </ProfileContainer>
        )
    }
}
