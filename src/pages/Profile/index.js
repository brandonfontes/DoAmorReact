import React from 'react';
import { Text } from 'react-native';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Input from '~/components/Input'

import { Container } from './styles';
import { TitleCard } from '~/components/Card/styles';

import AsyncStorage from '@react-native-community/async-storage';
import InfoAccount from '~/components/InfoAccount';
import InfoAccountInstitution from '~/components/InfoAccountInstitution';
import AccountLogin from '~/components/AccountLogin';
import Loading from '~/components/Loading';

import * as firebase from "firebase";

class Profile extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Perfil`
  });

  state = {
    isLogged: false,
    user: null,
    institution: {},
  }

  constructor(props) {
    super(props);
    this._signInAsync();
  }


  _signInAsync = async () => {
    const token = await AsyncStorage.getItem('userToken');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({ isLogged: true });
        this._getInfos(user.uid);
      } else {
        // No user is signed in.
        this.setState({ isLogged: false });
      }
    })

    if (token) {
      this.setState({
        isLogged: true
      })
    }
  };

  _getInfos = (id) => {
    // firebase.auth().signOut()
    // Buscar dados do usuario
    firebase.database().ref('/users/' + id).on('value', user => {
      this.setState({
        user: user.val()
      })

      if (user.val()) {
        if (user.val().type == 'institution') {
          // Buscar dados da intituicao
          firebase.database().ref('/institutions/' + id).on('value', institution => {
            this.setState({
              institution: institution.val(),
            })
          })
        }
      }

    })
  }

  /**
   * Componente deverá ser carreegado de acordo com typo do usuario
   */
  _renderAccountType = () => {
    return (
      (this.state.user.type == 'donor') ? <InfoAccount userInfo={this.state.user} /> : <InfoAccountInstitution institutionInfo={this.state.institution} />
    )
  }

  /**
   * Carregar component de conta se os dados foram carregados
   */
  _renderInfoAccount = () => {
    return (
      (this.state.user) ? this._renderAccountType() : <Loading text="Carregando perfil..." ></Loading>
    )
  }


  render() {
    return (

      <Container>
        {
          this.state.isLogged ? this._renderInfoAccount() : <AccountLogin />
        }

        <Tabs Active={"Profile"} />
      </Container>
    );
  };
}

export default Profile;