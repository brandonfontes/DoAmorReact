import React from 'react';

import { colors, metrics, fonts } from '~/styles';

import { Container, Text } from './styles';

import { withNavigation } from 'react-navigation';

import { getInstitution } from '~/services/institutions';

//import EditDonor from '~/components/EditDonor';
import EditInstitution from '~/components/EditInstitution';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Edit extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Editar`
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
            institution: {}
        })
    }

    render() {
        return (

            <Container>
            <Text>{this.state.institution.latitude}</Text>
                <EditInstitution />

            </Container>
        );
    };
}

export default withNavigation(Edit);

