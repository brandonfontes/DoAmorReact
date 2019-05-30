import React from 'react';

import { ListItem } from 'react-native-elements'

import { colors, metrics } from '~/styles';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo } from './styles';
import { TitleCard } from '~/components/Card/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Profile extends React.Component {
  static navigationOptions = {
    header: null
  }

  render(){
  return (
    
    <Container>
      <Header withSearch={false} Title={"Perfil"} IconRight={true}/>
      <ProfileContainer>
        <PhotoContainer>
          <ProfilePhoto>
            <Icon name="account-circle"
                    size={160}
                    color={colors.primary} />
          </ProfilePhoto>
        </PhotoContainer>
        <ProfileInfo>
          <ListItem
            title={"Brandon Fontes"}
            leftIcon={{ name: 'account-circle' }}
            bottomDivider
          />
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
      
      <Tabs Active={"Profile"}/>
    </Container>
    );
  };
}

export default Profile;