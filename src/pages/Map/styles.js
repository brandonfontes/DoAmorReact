import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  width: ${metrics.screenWidth}px;
  height: ${metrics.screenHeight}px;
`