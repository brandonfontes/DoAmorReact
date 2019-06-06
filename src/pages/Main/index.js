import React from 'react';

import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import Tabs from '~/components/Tabs';
import Card from '~/components/Card';
import Header from '~/components/Header';

import { listInstitutions, setInstitution } from '~/services/institutions';

import Loading from '~/components/Loading';

import { Container, ContainerCard } from './styles';

class Main extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    institutions: [],
    isLoading: true
  }

  componentDidMount() {
    listInstitutions().on('value', snapshot => {
      this.setState({
        institutions: snapshot.val(),
        isLoading: false
      });
    });
  }

  componentWillUnmount(){
    this.setState({
      institutions: [],
      isLoading: true
    })
  }

  _getIcon(type){
    switch(type){
      case 'child': // Criança
        return 'child-care';
      case 'family': // Família
        return 'people';
      case 'blood': // Sangue
        return 'healing';
      case 'shelter': // Abrigo
        return 'home';
      case 'deficient': // Deficiente
        return 'accessible';
      default: 
        return 'home'; // Padrão
    }
  }


  render() {

    return (

      <Container>
        <Header withSearch={true} Title={""} Filter={true} />
        <View>
          <Text>Welcome to my awesome aapp!</Text>
        </View>

        <ContainerCard >

          {
            Object.keys(this.state.institutions).map((key) => (
              <Card key={this.state.institutions[key].id} Id={this.state.institutions[key].id} Icon={this._getIcon(this.state.institutions[key].type)} Title={this.state.institutions[key].title} Address={this.state.institutions[key].address} />)
            )

          }

          {
            this.state.isLoading ? <Loading text="Carregando as instituições..." /> : <></>
          }

        </ContainerCard>
        <Tabs Active={"Main"} />

      </Container>
    );
  };
}

export default Main;