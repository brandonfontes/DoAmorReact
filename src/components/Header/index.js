import React from 'react';

import { SearchBar } from 'react-native-elements';

import { Container, Title } from './styles';

import { colors, metrics } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation}) {
    return (
        <Container style=''>
            <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} value="a" lightTheme="true" round="true" platform="ios"/>
        </Container>
    );
}