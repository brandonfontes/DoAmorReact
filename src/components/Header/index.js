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
                platform="android"
                containerStyle={{backgroundColor: 'transparent', marginBottom: metrics.smallMargin, padding: 0, height: 50}}
                placeholderTextColor={colors.light}
                inputContainerStyle={{backgroundColor: 'transparent'}}
                inputStyle={{color: '#fff'}}
                cancelButtonTitle="Cancelar"
                searchIcon={{backgroundColor: '#fff', color: '#fff'}}
                /> : null
            }

            { (props.Title) ? 
                <Title flex='1'>{(props.Title)}</Title>
            : null
            }

            { (props.IconRight) ? 
                <Icon name="edit" flex='1'
                size={26}
                color={colors.gray} />
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
