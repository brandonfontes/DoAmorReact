import React, { Component } from 'react';

import { View } from 'react-native';

import { withNavigation } from 'react-navigation';

import { ListItem } from 'react-native-elements'

import { colors, metrics } from '~/styles';

import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo, Title, HeaderInstitution, TitleHeader, HeaderImage } from './styles';

import ImageInstitution from '~/assets/header-institution.jpeg'

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import firebase from 'firebase';

class InfoAccountInstitution extends Component {


    _loggout() {
        firebase.auth().signOut().then(function () {
            alert('Até mais, volte sempre');
        }).catch(function (error) {
            alert('Falha ao deslogar, tente novamente')
        });
    }

    render() {
        const { institutionInfo } = this.props;
        
        return (
            <ProfileContainer>
                <HeaderInstitution source={ImageInstitution}>
                    <HeaderImage />
                    <Icon name='home' size={metrics.iconPrimary} color={colors.light} />
                    {institutionInfo && <TitleHeader> {institutionInfo.title} </TitleHeader>}
                </HeaderInstitution>
                <ProfileInfo>
                    <ListItem
                        title={"Perfil da instituição"}
                        leftIcon={{ name: 'home' }}
                        chevron
                        topDivider
                        onPress={() => this.props.navigation.navigate('Institution', {id: institutionInfo.id})}
                    />
                    <ListItem
                        title={"Editar perfil"}
                        leftIcon={{ name: 'edit' }}
                        chevron
                        topDivider
                        onPress={() => this.props.navigation.navigate('Edit', {id: institutionInfo.id})}
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

InfoAccountInstitution.propTypes = {
    institutionInfo: PropTypes.object.isRequired
}

export default withNavigation(InfoAccountInstitution);