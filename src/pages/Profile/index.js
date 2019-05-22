import React from 'react';

import { ListItem } from 'react-native-elements'

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container } from './styles';
import { TitleCard } from '~/components/Card/styles';


export default function Profile() {
  return (
    
    <Container>
      <Header withSearch={false} Title={"Perfil"}/>
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





      <TitleCard>
<Input>a </Input>
      Foto | Nome
      Nome: 
      Idade:
      Email:
      About
      </TitleCard>

      <Tabs Active={"Profile"}/>
    </Container>
    );
};
