import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const ContainerCard = styled(Animated.View)`
    background: ${colors.backgroundTabs};
    border-radius: ${metrics.baseRadius};
    margin: ${metrics.smallMargin}px ${metrics.baseMargin}px ;
    padding: ${metrics.basePadding}px ;

    flex-direction: row;
    justify-Content: center;
    elevation: ${metrics.elevation};

    z-index:1;

`
export const ContainerIconStart = styled(Animated.View)`
    flex: 2
    padding-right: ${metrics.basePadding}px ;
`

export const ContainerIconEnd = styled(Animated.View)`
    flex: 2
    
`

export const ContainerText = styled(Animated.View)`
    flex: 8; 
`;

export const TitleCard = styled.Text`
    font-size: ${fonts.TitleCard};

`;

export const AddressCard = styled.Text`
    font-size: ${fonts.AddressCard};

`;
