import React from 'react';

import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import Tabs from '~/components/Tabs';
import Card from '~/components/Card';
import Header from '~/components/Header';

import { listInstitutions } from '~/services/institutions';

import { Container, ContainerCard } from './styles';


class Main extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      institutions: [],
      isAuthenticated: false,
    }
    
  }

  

  componentDidMount() {
    this.setState({
      institutions: listInstitutions()
    });
    firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  onUserChanged = (currentUser) => {
    if (currentUser) {
      console.log(currentUser.toJSON())
    }
  }
  
  render(){
    if (!this.state.isAuthenticated) {
      return null;
    }
    return (

      <Container>
        <Header withSearch={true} Title={""} Filter={true}/>
        <View>
        <Text>Welcome to my awesome app!</Text>
      </View>
        <ContainerCard >
        
          {             
              this.state.institutions.map((item, id)=>(
                <Card key={item.id} Id={item.id} Icon={item.icon} Title={item.title} Address={item.address}/>)
              ) 
          }

        </ContainerCard>
        <Tabs Active={"Main"} />
        
      </Container>
      );
    };
}

export default Main;