import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  height: 10px;
`;

export const AboutContainer = styled.ScrollView.attrs({
    contentContainerStyle: { paddingBottom: 80},
    vertical: true,
  
  })``;

export const HeaderLogo = styled.Image`
  width: 80%;
  resize-mode:contain;
  
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`

export const TitleCard = styled.Text`
  font-size: ${fonts.TitleCard};
  flex: 1;
  margin-bottom: 10px;
`

export const ContainerCard = styled.View`
    background: ${colors.backgroundTabs};
    border-radius: ${metrics.baseRadius};
    margin: ${metrics.smallMargin}px ${metrics.baseMargin}px 0 ${metrics.baseMargin}px ;
    padding: ${metrics.basePadding}px ;
    flex-direction: column;
 
    elevation: ${metrics.elevation};


`