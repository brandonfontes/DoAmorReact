import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'

import { listInstitutions } from '~/services/institutions';


import { withNavigation } from 'react-navigation';

import { Container } from './styles';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -8.083520;
const LONGITUDE = -34.949683;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institutions: [],
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };

  }

  componentDidMount() {
    this.setState({
      institutions: listInstitutions()
    });
  }
  

  render() {
    return (
      <Container>
        <Header withSearch={true} Title={""}/>
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={this.state.region}
          >
          { this.state.institutions.map((item, id)=>(
           <MapView.Marker
            key={item.id}
            Id={item.id}
            coordinate={{latitude: item.latitude,
            longitude: item.longitude}}
            title={item.title}
            description={item.address}
         />)
          )}

          </MapView>
        </View>
        <Tabs Active={"Map"} />
      </Container>
      
    );
  }
}

Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({

  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default withNavigation(Map);