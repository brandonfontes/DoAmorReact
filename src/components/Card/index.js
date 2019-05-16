import React from 'react';

import { Container, TitleCard, AddressCard } from './styles';

import { colors, metrics, fonts } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Card() {
    return (
        <Container style=''>
            <Icon name="child-care" size={metrics.iconSecundary} color={colors.primary} />
            <TitleCard>Titulo da Instituição</TitleCard>
            <AddressCard>Uma breve descrição da instituição...</AddressCard>
        </Container>
    );
}