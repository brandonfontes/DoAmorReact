import React from 'react';

import { Container, TabsContainer, TabItemPrimary, TabItemSecundary, TabText } from './styles';

import { colors, metrics } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs() {
    return (
        <Container style=''>
            <TabItemSecundary>
                <Icon name="list" size={metrics.iconSecundary} color={colors.primary} />
            </TabItemSecundary>
            <TabItemPrimary>
                <Icon name="place" size={metrics.iconPrimary} color={colors.primary} />
            </TabItemPrimary>
            <TabItemSecundary>
                <Icon name="settings" size={metrics.iconSecundary} color={colors.primary} />
            </TabItemSecundary>
        </Container>
    );
}