import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  height: 10px;
`;

export const Text = styled.Text`

`