import React from 'react';
import { Text } from 'react-native';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container, ProfileContainer, PhotoContainer, ProfilePhoto, ProfileInfo } from './styles';
import { TitleCard } from '~/components/Card/styles';

import AsyncStorage from '@react-native-community/async-storage';
import InfoAccount from '~/components/InfoAccount';
import AccountLogin from '~/components/AccountLogin';


class Profile extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Perfil`
  });

  state = {
    isLogged: false
  }

  constructor(props) {
    super(props);
    this._signInAsync();
  }

  _signInAsync = async () => {
    const token = await AsyncStorage.getItem('userToken');

    if (token) {
      this.setState({
        isLogged: true
      })
    }
  };

  render() {
    return (

      <Container>
        {
          this.state.isLogged ? <InfoAccount /> : <AccountLogin />
        }

        <Tabs Active={"Profile"} />
      </Container>
    );
  };
}

export default Profile;