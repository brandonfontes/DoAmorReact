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
    padding: ${metrics.smallPadding}px;
    
    z-index:5;
   
`;

export const Title = styled.Text`
    font-size: ${fonts.TitleHeader}px;
    color: ${colors.light};
    flex: 1;
`;

export const ViewSearchBar = styled.View``;

export const ContainerFilter = styled.ScrollView.attrs({
    contentContainerStyle: { paddingTop: 0, paddingBottom: 0},
    horizontal: true,
    showsHorizontalScrollIndicator: false,
  })`
    padding-left: ${metrics.smallMargin}px;
  `;

export const CardFilter = styled.View`
    border-radius: ${metrics.baseRadius};
    border: ${colors.darkTransparent};
    margin: 0 ${metrics.miniMargin}px ${metrics.smallMargin}px 0;
    padding: ${metrics.smallPadding}px;
    background: ${colors.lightTransparent};

`;


export const TitleFilter = styled.Text`

    font-size: ${fonts.Title}px;
    background: rgba(0,0,0,0);

`;
