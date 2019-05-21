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
      <Header />
      <ListItem
        key={""}
        title={"Nome: Brandon Fontes"}
        leftIcon={{ name: 'account-circle' }}
      />
      <ListItem
        key={""}
        title={"item.title"}
        leftIcon={{ name: 'flight-takeoff' }}
      />
      <ListItem
        key={""}
        title={"item.title"}
        leftIcon={{ name: 'flight-takeoff' }}
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
