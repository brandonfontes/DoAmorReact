import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const Container = styled(Animated.View)`
    width: ${metrics.screenWidth};
    position: absolute;
    top: 0;
    left: 0;
    background: ${colors.primary};
    
    elevation: ${metrics.elevation};
    align-items: center;
    padding: ${metrics.basePadding}px;
    
    z-index:5;
   
`;

export const Title = styled.Text`
    font-size: ${fonts.TitleHeader}px;
    color: ${colors.light};
    flex: 1;
`;




