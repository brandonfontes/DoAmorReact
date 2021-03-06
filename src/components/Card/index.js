import React from 'react';

import { ContainerCard, ContainerIconStart, ContainerIconEnd, ContainerText, TitleCard, AddressCard } from './styles';

import { colors, metrics, fonts } from '~/styles';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';


class Card extends React.Component {
    render(){
        return (
        <ContainerCard >
            <ContainerIconStart>
             <Icon onPress={() => this.props.navigation.navigate('Institution', {id: this.props.Id})} name={(this.props.Icon)} size={metrics.iconPrimary} color={colors.primary} />
            </ContainerIconStart>
            <ContainerText onPress={() => this.props.navigation.navigate('Institution', {id: this.props.Id})}>
                <TitleCard>{(this.props.Title)}</TitleCard>
                <AddressCard>{(this.props.Address)}</AddressCard>
            </ContainerText>
        </ContainerCard>

);
}

}


export default withNavigation(Card);