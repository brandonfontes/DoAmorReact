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
                        <Icon name={(this.state.institution.icon)} size={metrics.iconPrimary} color={colors.light} />
                        <TitleHeader>
                            {this.state.institution.title}
                        </TitleHeader>
                    </HeaderInstitution>

                    <ContainerCard style={{ flexDirection: 'column' }}>
                        <TitleCard>
                            O que aceita
                    </TitleCard>
                        <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                        <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                        <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                        <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
                        <Text><Icon name="home" size={metrics.iconSecundary} color={colors.gray} /> Alimento </Text>
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
                            {this.state.institution.tel}
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

