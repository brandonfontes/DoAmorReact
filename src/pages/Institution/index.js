import React from 'react';

import { ListItem } from 'react-native-elements'

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, ContainerCard, HeaderCard, Text } from './styles';

import { withNavigation } from 'react-navigation';


import { getInstitution } from '~/services/institutions';

class Institution extends React.Component {
    render(){
        const { navigation } = this.props;
        const id = navigation.getParam('id');

        const institution = getInstitution(id);

        
    return (
      
        <Container>
            <Header withSearch={false} Title={institution.title} />
            <ContainerCard>
                <HeaderCard>
                    <Text>
                    {institution.title}
                    {institution.address}
                    </Text>
                </HeaderCard>
            </ContainerCard>

            <Tabs Active={"Main"}/>
        </Container>
        );
    };
}

export default withNavigation(Institution);

