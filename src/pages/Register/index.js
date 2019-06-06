import React from 'react';

import { colors, metrics, fonts } from '~/styles';

import { Container } from './styles';

import { withNavigation } from 'react-navigation';

import RegisterDonor from '~/components/RegisterDonor';
import RegisterInstitution from '~/components/RegisterInstitution';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Register extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Criar conta`
    });

    state = {
        registerPage: this.props.navigation.getParam('registerPage'),
    }

    render() {
        return (

            <Container>
                {
                    this.state.registerPage ? <RegisterDonor /> : <RegisterInstitution />
                }

            </Container>
        );
    };
}

export default withNavigation(Register);

