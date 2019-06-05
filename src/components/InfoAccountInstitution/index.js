import React, { Component } from 'react';

import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

import { colors, metrics } from '~/styles';

import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo, Title, HeaderInstitution, TitleHeader, HeaderImage } from './styles';

import ImageInstitution from '~/assets/header-institution.jpeg'

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class InfoAccountInstitution extends Component {
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
                        bottomDivider
                    />
                    <ListItem
                        title={"Editar perfil"}
                        leftIcon={{ name: 'edit' }}
                        chevron
                        bottomDivider
                    />
                    <ListItem
                        title={"Dashboard"}
                        leftIcon={{ name: 'donut-small' }}
                        chevron
                        bottomDivider
                    />
                    <ListItem
                        title={"Sobre"}
                        leftIcon={{ name: 'info' }}
                        chevron
                        bottomDivider
                    />
                    <ListItem
                        title={"Sair da conta"}
                        leftIcon={{ name: 'power-settings-new' }}
                        chevron
                        bottomDivider
                    />
                </ProfileInfo>
            </ProfileContainer>
        )
    }
}
