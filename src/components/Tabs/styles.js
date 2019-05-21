import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled(Animated.View)`
    width: ${metrics.screenWidth};
    position: absolute;
    bottom: -1;
    left: 0;
    background: ${colors.backgroundTabs};
    flex-direction: row;
    border-top-start-radius: ${metrics.tabsRadius};
    border-top-right-radius: ${metrics.tabsRadius};
    elevation: ${metrics.elevation};
    border: ${colors.gray};
    z-index: 5;
    
`;

export const TabItemPrimary = styled.View`
    margin: ${metrics.baseMargin}px;
    flex: 1;
    align-items: center;
    display: flex;
    margin-top: -15px;
    background: ${colors.backgroundTabs};
    border-top-start-radius: ${metrics.tabsRadius}px;
    border-top-right-radius: ${metrics.tabsRadius}px;
`;

export const TabItemPrimaryContent = styled.TouchableOpacity`

`;

export const TabItemSecundary = styled.TouchableOpacity`
    margin: ${metrics.baseMargin}px;
    flex: 1;
    align-items: center;
    display: flex;
   
`;

export const Icon = styled.View`
    color: ${colors.primary};
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: ${colors.primary};
`;






