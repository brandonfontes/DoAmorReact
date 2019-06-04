import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  height: 10px;
`;

export const ContainerCard = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: 100, paddingBottom: 80},
  vertical: true,

})``;