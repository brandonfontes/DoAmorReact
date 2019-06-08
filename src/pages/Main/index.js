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

  componentWillMount() {
    this._loadInfo();
  }

  componentWillUnmount(){
    this.setState({
      institutions: [],
      isLoading: true
    })
  }

  // Carregar informacoes
  _loadInfo(){
    listInstitutions().on('value', snapshot => {
      this.setState({
        institutions: snapshot.val(),
        isLoading: false
      });
    });
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

  _loadByfilterDonation(typeDonation){
    if(typeDonation == null){
      this._loadInfo()
    }else{
      listInstitutions().orderByChild(typeDonation).equalTo(true).on('value', snapshot => {
        if(snapshot.val()){
          this.setState({
            institutions: snapshot.val(),
            isLoading: false
          });
        }else{
          this.setState({
            institutions: {},
            isLoading: false
          });
        }
       
      });
    }
   
  }


  _loadBySearch(title){
    if(title == null){
      this._loadInfo()
    }else{
      listInstitutions().orderByChild('title').startAt(title).on('value', snapshot => {
        if(snapshot.val()){
          this.setState({
            institutions: snapshot.val(),
            isLoading: false
          });
        }else{
          this.setState({
            institutions: {},
            isLoading: false
          });
        }
       
      });
    }
   
  }

  render() {

    return (

      <Container>
        <Header withSearch={true} Title={""} Filter={true} filterFunction={this._loadByfilterDonation.bind(this)} searchFunction={this._loadBySearch.bind(this)}/>
      
        <ContainerCard >

          {
            Object.keys(this.state.institutions).map((key) => (
              <Card key={this.state.institutions[key].id} Id={this.state.institutions[key].id} Icon={this._getIcon(this.state.institutions[key].type)} Title={this.state.institutions[key].title} Address={this.state.institutions[key].address} />)
            )

          }

          {
            this.state.isLoading ? <Loading text="Carregando as instituições..." /> : <></>
          }

          {
             Object.keys(this.state.institutions).length == 0 && <Text>Não temos nada!</Text>
          }

        </ContainerCard>
        <Tabs Active={"Main"} />

      </Container>
    );
  };
}

export default Main;