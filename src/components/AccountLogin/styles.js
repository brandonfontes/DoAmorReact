import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-top: 50px;

`

export const ProfileContainer = styled.View`
  padding: 15px;
`

export const PhotoContainer = styled.View`
  align-items: center;
  margin: ${metrics.baseMargin}px;

`

export const ProfilePhoto = styled.View`
  elevation: ${metrics.elevation}
`

export const ProfileInfo = styled.View`

`

