import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'
import { colors, metrics } from '~/styles';
import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import firebase from 'firebase';

class InfoAccount extends Component {


    _loggout() {
        firebase.auth().signOut().then(function () {
            alert('Até mais, volte sempre');
        }).catch(function (error) {
            alert('Falha ao deslogar, tente novamente')
        });
    }

    render() {
        const { userInfo } = this.props;

        console.log(userInfo);

        return (
            <ProfileContainer>
                <PhotoContainer>
                    <ProfilePhoto>
                        <Icon name="account-circle"
                            size={160}
                            color={colors.primary} />
                    </ProfilePhoto>
                    <Title>{userInfo.name}</Title>
                </PhotoContainer>
                <ProfileInfo>
                    <ListItem
                        title={userInfo.email}
                        leftIcon={{ name: 'email' }}
                        topDivider
                    />
                    <ListItem
                        title={userInfo.birthdate}
                        leftIcon={{ name: 'date-range' }}
                        topDivider
                    />

                    <ListItem
                        title={userInfo.gender}
                        leftIcon={{ name: 'people' }}
                        topDivider
                    />

                    <ListItem
                        title={"Editar Perfil"}
                        leftIcon={{ name: 'edit' }}
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

InfoAccount.propTypes = {
    userInfo: PropTypes.object.isRequired
}

export default InfoAccount;