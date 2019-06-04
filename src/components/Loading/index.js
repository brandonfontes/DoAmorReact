import React from 'react';
import {
    ActivityIndicator
  } from 'react-native'

import { colors } from '~/styles';

import { Container, TextLoading } from './styles';

export default function Loading(props) {
  return (
    <Container>
        <ActivityIndicator size="large" color={colors.primary} />
        <TextLoading>{props.text}</TextLoading>
    </Container>
  );
}
