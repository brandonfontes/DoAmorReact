import React from 'react';

import { Container, TabItemPrimary, TabItemPrimaryContent, TabItemSecundary, TabText } from './styles';

import { colors, metrics } from '~/styles';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Tabs extends React.Component {
    render(){
        return (
            <Container style=''>
                <TabItemSecundary onPress={() => this.props.navigation.navigate('Main')}>
                    <Icon name="list" size={metrics.iconSecundary} color={colors.primary} />
                </TabItemSecundary>
                <TabItemSecundary onPress={() => this.props.navigation.navigate('Map')}>
                        <Icon name="place" size={metrics.iconSecundary} color={colors.primary} />
                </TabItemSecundary>
                <TabItemSecundary onPress={() => this.props.navigation.navigate('Profile')}>
                    <Icon name="account-circle" size={metrics.iconSecundary} color={colors.primary} />
                </TabItemSecundary>
            </Container>
        );
    }
    
}

export default withNavigation(Tabs);