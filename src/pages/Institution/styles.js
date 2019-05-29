import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  height: 10px;
`;

export const ContainerContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: 70, paddingBottom: 80},
  vertical: true,

})``;

export const HeaderInstitution = styled.View`
  background: red;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
`;

export const TitleHeader = styled.Text`
  color: ${colors.light};
  font-size: 24px;
`

export const Card = styled.View`

`;

export const TitleCard = styled.Text`
  font-size: ${fonts.TitleCard};
  color: ${colors.gray};
  flex: 1;
  margin-bottom: 10px;
`

export const Text = styled.Text`
  color: ${colors.gray};
  font-size: 16px;
  flex: 1;
  padding: 5px 0;
  

`