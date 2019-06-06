import React from 'react';

import { ListItem } from 'react-native-elements'

import { colors, metrics, fonts } from '~/styles';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, ContainerContent, HeaderInstitution, TitleHeader, TitleCard, Text, HeaderImage } from './styles';
import { ContainerCard } from '~/components/Card/styles';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getInstitution } from '~/services/institutions';

import ImageInstitution from '~/assets/header-institution.jpeg'

class Institution extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Instituição`
      });
    

    state = {
        institution: {}
    }

    _getIcon(type){
        switch(type){
          case 'child': // Criança
            return 'child-care';
          case 'family': // Família
            return 'people';
          case 'blood': // Sangue
            return 'healing';
          case 'shelter': // Abrigo
            return 'home';
          case 'deficient': // Deficiente
            return 'accessible';
          default: 
            return 'home'; // Padrão
        }
      }

    componentDidMount() {
        getInstitution(this.props.navigation.getParam('id')).on('value', snap => {
            this.setState({
                institution: snap.val()
            });
        })
    }

    componentWillUnmount() {
        this.setState({
            institution: []
        })
    }

    render() {
        return (

            <Container>
                <ContainerContent>
                    <HeaderInstitution source={ImageInstitution}>
                        <HeaderImage />
                        <Icon name={(this._getIcon(this.state.institution.type))}
                        size={metrics.iconPrimary} color={colors.light} />
                        <TitleHeader>
                            {this.state.institution.title}
                        </TitleHeader>
                    </HeaderInstitution>

                    <ContainerCard style={{ flexDirection: 'column' }}>
                        <TitleCard>
                            O que aceita
                    </TitleCard>
                    {this.state.institution.donate_food && <Text> Alimento </Text>}
                    {this.state.institution.donate_constructionMaterial && <Text> Material de Construção </Text>}
                    {this.state.institution.donate_electronic && <Text> Eletrônico </Text>}
                    {this.state.institution.donate_clothes && <Text> Roupa </Text>}
                    {this.state.institution.donate_musicalInstruments && <Text> Instrumento Musical </Text>}
                    {this.state.institution.donate_toy && <Text> Brinquedo </Text>}
                    {this.state.institution.donate_personalHygiene && <Text> Higiene Pessoal </Text>}
                    {this.state.institution.donate_book && <Text> Livro </Text>}

                    </ContainerCard>

                    <ContainerCard style={{ flexDirection: 'column' }}>
                        <TitleCard>
                            Quem somos
                    </TitleCard>
                        <Text>
                            {this.state.institution.description}
                        </Text>
                    </ContainerCard>

                    <ContainerCard style={{ flexDirection: 'column' }}>
                        <TitleCard>
                            Endereço
                    </TitleCard>
                        <Text>
                            {this.state.institution.address}
                        </Text>
                    </ContainerCard>

                    <ContainerCard style={{ flexDirection: 'column' }}>
                        <TitleCard>
                            Contato
                    </TitleCard>
                        <Text>
                            {this.state.institution.phone}
                        </Text>
                        <Text>
                            {this.state.institution.email}
                        </Text>
                    </ContainerCard>


                </ContainerContent>


            </Container>
        );
    };
}

export default withNavigation(Institution);

