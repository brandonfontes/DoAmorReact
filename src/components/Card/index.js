import React from 'react';

import { ContainerCard, ContainerIcon, ContainerText, TitleCard, AddressCard } from './styles';

import { colors, metrics, fonts } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Card() {
    return (
        <ContainerCard style=''>
            <ContainerIcon>
             <Icon name="child-care" size={metrics.iconSecundary} color={colors.primary} />
            </ContainerIcon>
            <ContainerText>
                <TitleCard>Titulo da Instituição</TitleCard>
                <AddressCard>Uma breve descrição da instituição...</AddressCard>
            </ContainerText>
        </ContainerCard>
    );
}