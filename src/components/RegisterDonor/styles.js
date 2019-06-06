import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

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