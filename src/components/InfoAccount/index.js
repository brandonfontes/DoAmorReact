import React, { Component } from 'react';

import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

import { colors, metrics } from '~/styles';

import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InfoAccount extends Component {
    render() {
        return (
            <ProfileContainer>
                <PhotoContainer>
                    <ProfilePhoto>
                        <Icon name="account-circle"
                            size={160}
                            color={colors.primary} />
                    </ProfilePhoto>
                    <Title>Brandon Fontes</Title>
                </PhotoContainer>
                <ProfileInfo>
                    <ListItem
                        title={"brandon-fonte@hotmail.com"}
                        leftIcon={{ name: 'email' }}
                        bottomDivider
                    />
                    <ListItem
                        title={"09/09/1994"}
                        leftIcon={{ name: 'date-range' }}
                        bottomDivider
                    />
                    <ListItem
                        title={"Editar Perfil"}
                        leftIcon={{ name: 'edit' }}
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
