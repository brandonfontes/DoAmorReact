import React from 'react';

import { ListItem } from 'react-native-elements'

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, Text  } from './styles';
import { TitleCard } from '~/components/Card/styles';

import institutions from '~/services/institutions';
import { withNavigation } from 'react-navigation';


class Institution extends React.Component {
    render(){
        const { navigation } = this.props;
        const id = navigation.getParam('id');


    return (
      
    
        <Container>
            <Header withSearch={false} Title={id} />
        
        

            <TitleCard>
                <Text>{JSON.stringify(id)} {id}</Text>
            </TitleCard>

            <Tabs Active={"Main"}/>
        </Container>
        );
    };
}

export default withNavigation(Institution);

