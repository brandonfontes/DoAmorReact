import React from 'react';

import Tabs from '~/components/Tabs'
import Card from '~/components/Card'

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Card />
      <Tabs />
    </Container>
    );
};
