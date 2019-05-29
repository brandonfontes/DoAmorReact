import React from 'react';

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
      institutions: []
    }
  }

  componentDidMount() {
    this.setState({
      institutions: listInstitutions()
    });
  }
  
  render(){
    return (

      <Container>
        <Header withSearch={true} Title={""} Filter={true}/>
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