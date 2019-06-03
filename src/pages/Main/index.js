import React from 'react';

import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import Tabs from '~/components/Tabs';
import Card from '~/components/Card';
import Header from '~/components/Header';

import { listInstitutions, setInstitution } from '~/services/institutions';

import { Container, ContainerCard } from './styles';

class Main extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      institutions: [],
    }
    
  }


  componentDidMount() {
    listInstitutions().then( function(snapshot) {this.setState({institutions: snapshot});});
  }
  
  render(){
    
    return (

      <Container>
        <Header withSearch={true} Title={""} Filter={true}/>
        <View>
        <Text>Welcome to my awesome aapp!</Text>
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