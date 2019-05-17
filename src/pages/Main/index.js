import React from 'react';

import Tabs from '~/components/Tabs'
import Card from '~/components/Card'
import Header from '~/components/Header'

import { Container } from './styles';

export default function Main() {
  return (
    
    <Container>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Tabs />
    </Container>
    );
};
