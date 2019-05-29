import React from 'react';

import { SearchBar } from 'react-native-elements';

import { Container, Title, ViewSearchBar, ContainerFilter, CardFilter, TitleFilter } from './styles';

import { listInstitutions } from '~/services/institutions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, metrics } from '~/styles';


export default function Header(props) {
    
    state = {
        search: listInstitutions.title,
    };
    
    updateSearch = search => {
        this.setState({ search });
    };

    const { search } = this.state;

    return (
        <Container>
            
            { (props.withSearch) ? 
                <SearchBar
                onChangeText={this.updateSearch}
                value={search}
                placeholder={'Digite o nome da instituição'}
                lightTheme="true"
                round="true"
                platform="ios"
                containerStyle={{backgroundColor: 'transparent', marginBottom: metrics.smallMargin, padding: 0, height: 50}}
                color='#fff'
                inputContainerStyle={{backgroundColor: colors.lightTransparent,}}
                cancelButtonTitle="Cancelar"
                /> : null
            }

            { (props.Title) ? 
                <Title>{(props.Title)}</Title>
            : null
            }

            { (props.Filter) ? 
                <ContainerFilter>
                    <CardFilter>
                        <TitleFilter>Brinquedo</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Roupa</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Sangue</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Alimento</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Objetos de Higiênie</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Eletro/Eletronico</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                    <CardFilter>
                        <TitleFilter>Livro</TitleFilter>
                    </CardFilter>
                </ContainerFilter>
            : null
            }
        </Container>
    );
}
