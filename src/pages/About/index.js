import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { Container, AboutContainer, HeaderLogo, Header, ContainerCard, TitleCard } from './styles';

import { colors, metrics, defaultStyles } from '~/styles';

import Logo from '~/assets/logo2-verde.png';

import { withNavigation } from 'react-navigation';


class About extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Sobre`
    });

    render() {
        return (
            <Container>
                <AboutContainer>
                    <Header>
                        <HeaderLogo source={Logo} />
                    </Header>


                    <ContainerCard>
                        <TitleCard>
                            Sobre o DoAmor
                        </TitleCard>
                        <Text>
                            A proposta do DoAmor é realizar a intermediação entre o doador e o local receptivo de donativos, 
                            facilitando a localização digital e dando maior visibilidade as instituições receptoras.
                        </Text>
                    </ContainerCard>

                    <ContainerCard >
                        <TitleCard>
                            Equipe
                        </TitleCard>
                        <Text>Brandon Fontes</Text>
                        <Text>Douglas Silva</Text>
                        <Text>Kamilla Melo</Text>
                        <Text>Letícia Abreu</Text>
                        <Text>Thiago Moreira</Text>
                        <Text>Victor Hugo</Text>
                    </ContainerCard>

                    <ContainerCard >
                        <TitleCard>
                            Instrutores
                        </TitleCard>
                        <Text>Nicolau Calado</Text>
                        <Text>José Mario</Text>
                    </ContainerCard>

                    <ContainerCard >
                        <TitleCard>
                            Instrutor de Desenvolvimento
                        </TitleCard>
                        <Text>Erick Haendel</Text>
                    </ContainerCard>

                </AboutContainer>
            </Container>
        )
    }
}



export default withNavigation(About);
