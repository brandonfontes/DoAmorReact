import React from 'react';

import Tabs from '~/components/Tabs'
import Card from '~/components/Card'
import Header from '~/components/Header'

import { Container, ContainerCard } from './styles';

export default function Main() {
  return (
    
    <Container>
      <Header withSearch={true} />
      <ContainerCard vertical={true}
  showsVerticalScrollIndicator={true}
  backgroundColor='#FF0000'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerCard>
      <Tabs />
    </Container>
    );
};
