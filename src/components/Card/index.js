import React from 'react';

import { ContainerCard, ContainerIconStart, ContainerIconEnd, ContainerText, TitleCard, AddressCard } from './styles';

import { colors, metrics, fonts } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Card() {
    return (
        <ContainerCard>
            <ContainerIconStart>
             <Icon name="child-care" size={metrics.iconPrimary} color={colors.primary} />
            </ContainerIconStart>
            <ContainerText>
                <TitleCard>Lar Esperança</TitleCard>
                <AddressCard>Rua Doutor Augusto Maciel - 63 Hipódromo | Recife - PE</AddressCard>
            </ContainerText>
            <ContainerIconEnd>
             <Icon name="navigate-next" size={metrics.iconPrimary} color={colors.gray} />
            </ContainerIconEnd>
        </ContainerCard>

        
    );
}