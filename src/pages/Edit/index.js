import React from 'react';

import { colors, metrics, fonts } from '~/styles';

import { Container } from './styles';

import { withNavigation } from 'react-navigation';

//import EditDonor from '~/components/EditDonor';
import EditInstitution from '~/components/EditInstitution';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Edit extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Editar`
    });

    state = {
        editPage: this.props.navigation.getParam('editPage'),
    }

    render() {
        return (

            <Container>
                {
                    this.state.editPage ? <EditInstitution institutionInfo={this.state.institution} /> : <EditInstitution institutionInfo={this.state.institution} />
                }

            </Container>
        );
    };
}

export default withNavigation(Edit);

