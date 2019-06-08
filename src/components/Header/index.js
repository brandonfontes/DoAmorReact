import React from 'react';

import { SearchBar } from 'react-native-elements';

import { Container, Title, ViewSearchBar, ContainerFilter, CardFilter, TitleFilter } from './styles';

import {Text} from 'react-native';

import { listInstitutions } from '~/services/institutions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, metrics } from '~/styles';


class Header extends React.Component {
    
    state = {
        search: '',
        filterChoice: null,
    };

    setFilter = (t) => {
        if(t == this.state.filterChoice){
            this.setState({
                filterChoice: null
            })

            this.props.filterFunction(null)
        }else{
            this.setState({
                filterChoice: t
            })

            this.props.filterFunction(t)
        }  
    }


    setSearch = t => {
        if(t == this.state.search){
            this.setState({
                search: null
            })

            this.props.searchFunction(null)
        }else{
            this.setState({
                search: t
            })

            this.props.searchFunction(t)
        }  
    }

    render(){ 
        
        const { search } = this.state;

        return (
            <Container>
                
                { (this.props.withSearch) ? 
                    <SearchBar
                    onChangeText={this.setSearch}
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

                { (this.props.Title) ? 
                    <Title flex='1'>{(this.props.Title)}</Title>
                : null
                }

                { (this.props.IconRight) ? 
                    <Icon name="edit" flex='1'
                    size={26}
                    color={colors.gray} />
                : null
                }

                { (this.props.Filter) ? 
                    <ContainerFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_food' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_food')}  ><Text>Alimento</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_book' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_book')} ><Text>Livros</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_electronic' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_electronic')} ><Text>Eletrônico</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_clothes' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_clothes')} ><Text>Roupa</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_musicalInstruments' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_musicalInstruments')} ><Text>Instrumento Musical</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_toy' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_toy')} ><Text>Brinquedo</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_personalHygiene' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_personalHygiene')} ><Text>Higiene Pessoal</Text></TitleFilter>
                        </CardFilter>
                        <CardFilter active={this.state.filterChoice == 'donate_constructionMaterial' ? true : false}>
                            <TitleFilter onPress={() => this.setFilter('donate_constructionMaterial')} ><Text>Material de Construção</Text></TitleFilter>
                        </CardFilter>
                    </ContainerFilter>
                : null
                }
            </Container>
        );
    } 
}


export default Header; 