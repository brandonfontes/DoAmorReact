import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const Container = styled(Animated.View)`
    width: ${metrics.screenWidth};
    height: 30px;
    background: ${colors.backgroundTabs};
    border-radius: ${metrics.baseRadius};
    margin: ${metrics.baseMargin}px 0;

    shadowColor: #000;
    shadowOffset: {
        width: 0,
        height: 12,
    };
    shadowOpacity: 0.58;
    shadowRadius: 16.00;

    elevation: 24;
`;

export const TitleCard = styled.Text`
    font-size: ${fonts.TitleCard};

`;

export const AddressCard = styled.Text`
    font-size: ${fonts.AddressCard};

`;
