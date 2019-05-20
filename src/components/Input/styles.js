import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';

export const Container = styled.TextInput`
    padding: 5px;
    margin: 5px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

export const Text = styled.Text`
    font-size: ${fonts.TitleHeader}px;
    color: ${colors.light};
    flex: 1;
`;




