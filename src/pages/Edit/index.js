import React from 'react';

import { colors, metrics, fonts } from '~/styles';

import { Container, Text } from './styles';

import { withNavigation } from 'react-navigation';

import { getInstitution, getUser } from '~/services/institutions';

import EditDonor from '~/components/EditDonor';
import EditInstitution from '~/components/EditInstitution';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Edit extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Editar`
    });

    state = {
        institution: {},
        user: {},
    }


    componentDidMount() {
        getInstitution(this.props.navigation.getParam('id')).on('value', snap => {
            this.setState({
                institution: snap.val()
            });
        })
        getUser(this.props.navigation.getParam('id')).on('value', snap => {
            this.setState({
                user: snap.val()
            });
        })
    }

    componentWillUnmount() {
        this.setState({
            institution: {},
            user: {},
        })
    }

    render() {
        return (

            <Container>
                
                {
                    (this.state.user.type == 'donor') ? <EditDonor /> : <EditInstitution />
                }
                

            </Container>
        );
    };
}

export default withNavigation(Edit);

