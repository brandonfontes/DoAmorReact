import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const ProfileContainer = styled.ScrollView`
  padding: ${metrics.smallPadding}px ${metrics.basePadding}px ${metrics.doubleBaseMargin}px ${metrics.basePadding}px  ;
  width: ${metrics.screenWidth};
`

export const HeaderLogo = styled.Image`
  width: 100%;
  resize-mode:contain;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  
`

export const FormLogin = styled.View`
  
`

export const ContainerTitle = styled.View`
  align-items: center;
  margin: ${metrics.smallMargin}px;
`

export const Title = styled.Text`
  font-size: ${fonts.TitleCard}px;
`
