import React from 'react';

import { ListItem } from 'react-native-elements'

import { colors, metrics } from '~/styles';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, ContainerContent, HeaderInstitution, TitleHeader, TitleCard, Text } from './styles';
import { ContainerCard } from '~/components/Card/styles';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getInstitution } from '~/services/institutions';

class Institution extends React.Component {
    render(){
        const { navigation } = this.props;
        const id = navigation.getParam('id');

        const institution = getInstitution(id);

        
    return (
      
        <Container>
            <Header withSearch={false} Title={institution.title} Back={false}/>
            <ContainerContent>
                <HeaderInstitution >
                    <Icon name={(institution.icon)} size={metrics.iconPrimary} color={colors.light} />
                    <TitleHeader>
                    {institution.title}
                    </TitleHeader>
                </HeaderInstitution>

                <ContainerCard style={{ flexDirection: 'column'}}>
                    <TitleCard>
                        O que aceita
                    </TitleCard>
                    <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                    <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                    <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                    <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                    <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                </ContainerCard>

                <ContainerCard style={{ flexDirection: 'column'}}>
                    <TitleCard>
                        Endereço
                    </TitleCard>
                    <Text>
                        {institution.address}
                    </Text>
                </ContainerCard>

                <ContainerCard style={{ flexDirection: 'column'}}>
                    <TitleCard>
                        Informações
                    </TitleCard>
                    <Text>
                        {institution.address}
                    </Text>
                </ContainerCard>

                <ContainerCard style={{ flexDirection: 'column'}}>
                    <TitleCard>
                        Contato
                    </TitleCard>
                    <Text>
                        {institution.address}
                    </Text>
                </ContainerCard>

                
            </ContainerContent>

            <Tabs Active={"Main"}/>
        </Container>
        );
    };
}

export default withNavigation(Institution);

