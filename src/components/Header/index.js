import React from 'react';

import { SearchBar } from 'react-native-elements';

import { Container, Title, ViewSearchBar } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(props) {
    return (
        <Container>
            
            { (props.withSearch) ? 
                <SearchBar
                onChangeText={this.updateSearch}
                value="a"
                placeholder={'Digite o nome da instituição'}
                lightTheme="true"
                round="true"
                platform="ios"
                containerStyle={{backgroundColor: 'transparent'}}
                color='#fff'
                /> : null
            }

            { (props.Title) ? 
                <Title>{(props.Title)}</Title>
            : null
            }

            { (props.Back) ? 
                <Title onPress={() => this.props.navigation.goBack()}>Voltar</Title>
                : null
            }
        </Container>
    );
}
