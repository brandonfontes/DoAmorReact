import React from 'react';

import Tabs from '~/components/Tabs';
import Card from '~/components/Card';
import Header from '~/components/Header';

import { institutions } from '~/services/institutions';

import { Container, ContainerCard } from './styles';


class Main extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      institutions: []
    }

    console.log("OI")
    ;  }

  componentDidMount() {
    this.setState({
      institutions: institutions
    });
  }
  
  render(){
    return (

      <Container>
        <Header withSearch={true} Title={""}/>
        <ContainerCard >
        
          {             
              institutions.map((item, key)=>(
                <Card key={item.id} Icon={item.icon} Title={item.title} Address={item.address}/>)
              ) 
          }

        </ContainerCard>
        <Tabs Active={"Main"} />
        
      </Container>
      );
    };
}

export default Main;

// e ai?