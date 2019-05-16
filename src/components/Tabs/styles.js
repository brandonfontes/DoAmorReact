import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled(Animated.View)`
    width: ${metrics.screenWidth};
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${colors.backgroundTabs};
    flex-direction: row;
    border-top-start-radius: ${metrics.tabsRadius};
    border-top-right-radius: ${metrics.tabsRadius};

    shadowColor: #000;
    shadowOffset: {
        width: 0,
        height: 12,
    };
    shadowOpacity: 0.58;
    shadowRadius: 16.00;

    elevation: 24;
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

    shadowColor: #000;
    shadowOffset: {
        width: 0,
        height: 12,
    };
    shadowOpacity: 0.58;
    shadowRadius: 16.00;

    elevation: 24;
`;

export const TabItemSecundary = styled.View`
    margin: ${metrics.baseMargin}px;
    flex: 1;
    align-items: center;
    display: flex;
    shadowColor: #000;
    shadowOffset: {
        width: 0,
        height: 12,
    };
    shadowOpacity: 0.58;
    shadowRadius: 16.00;

    elevation: 24;
`;

export const Icon = styled.View`
    color: ${colors.primary};
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: ${colors.primary};
`;






