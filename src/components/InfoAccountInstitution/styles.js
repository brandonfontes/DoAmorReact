import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-top: 50px;

`

export const ProfileContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 80},
  vertical: true,

})``;

export const PhotoContainer = styled.View`
  align-items: center;
  margin: ${metrics.baseMargin}px;

`

export const ProfilePhoto = styled.View`
  elevation: ${metrics.elevation}
`

export const ProfileInfo = styled.View`

`

export const Title = styled.Text`
  font-size: ${fonts.Title}px;
`

export const HeaderInstitution = styled.ImageBackground`
  height: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const HeaderImage = styled.View`

`;



export const TitleHeader = styled.Text`
  color: ${colors.light};
  font-size: 24px;
`