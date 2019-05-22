import React from 'react';

import { ListItem } from 'react-native-elements'

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, ContainerCard } from './styles';
import { TitleCard } from '~/components/Card/styles';

import instituicoes from '~/services/instituicoes';
import { withNavigation } from 'react-navigation';


class Instituicao extends React.Component {
    render(){
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    return (
      
    
        <Container>
        <Header withSearch={false} Title={"Perfil"} />
    
        <ContainerCard >
        
        

        </ContainerCard>

        <Tabs Active={"Main"}/>
        </Container>
        );
};
}

export default withNavigation(Instituicao);

