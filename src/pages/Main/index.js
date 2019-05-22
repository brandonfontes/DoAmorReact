import React from 'react';

import Tabs from '~/components/Tabs';
import Card from '~/components/Card';
import Header from '~/components/Header';

import instituicoes from '~/services/instituicoes';

import { Container, ContainerCard } from './styles';

export default function Main() {

  return (

    <Container>
      <Header withSearch={true} Title={""}/>
      <ContainerCard >
      
        { instituicoes.map((item, key)=>(
          <Card key={item.id} Icon={item.icon} Title={item.title} Address={item.address}/>)
        )}

      </ContainerCard>
      <Tabs Active={"Main"} />
      
    </Container>
    );
};
