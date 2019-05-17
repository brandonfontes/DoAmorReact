import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const ContainerCard = styled(Animated.View)`
background: ${colors.backgroundTabs};
border-radius: ${metrics.baseRadius};
margin: ${metrics.baseMargin}px ;
padding: ${metrics.baseMargin}px ;

flex-direction: row;

elevation: 24;

`
export const ContainerIcon = styled(Animated.View)`
    flex: 1
`

export const ContainerText = styled(Animated.View)`
    flex: 5; 
`;

export const TitleCard = styled.Text`
    font-size: ${fonts.TitleCard};

`;

export const AddressCard = styled.Text`
    font-size: ${fonts.AddressCard};

`;
