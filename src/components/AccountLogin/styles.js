import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const ProfileContainer = styled.ScrollView`
  padding: 15px;
  width: ${metrics.screenWidth};
  flex-direction: column;

`

export const HeaderLogo = styled.Image`
  width: 80%;
  resize-mode:contain;
  
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`

export const FormLogin = styled.View`
  
`