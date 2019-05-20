import React from 'react';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container } from './styles';
import { TitleCard } from '~/components/Card/styles';


export default function Profile() {
  return (
    
    <Container>
      <Header />
      <TitleCard>
<Input>a </Input>
      Foto | Nome
      Nome: 
      Idade:
      Email:
      About
      </TitleCard>
      <Tabs />
    </Container>
    );
};
