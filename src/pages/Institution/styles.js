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
  contentContainerStyle: { paddingTop: 0, paddingBottom: 80},
  vertical: true,

})``;

export const HeaderInstitution = styled.ImageBackground`
  height: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;
  elevation: ${metrics.elevation};
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

export const HeaderImage = styled.View`

`;



export const TitleHeader = styled.Text`
  color: ${colors.light};
  font-size: 24px;
  text-align: center;

`

export const Card = styled.View`

`;

export const TitleCard = styled.Text`
  font-size: ${fonts.TitleCard};

  flex: 1;
  margin-bottom: 10px;
`

export const Text = styled.Text`

  font-size: 16px;
  flex: 1;
  padding: 5px 0;
  

`