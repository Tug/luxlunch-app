import React from 'react';
import MapView, { AnimatedRegion, Animated, Marker } from 'react-native-maps';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 49.6083891,
        longitude: 6.1262951,
        latitudeDelta: 0.07,
        longitudeDelta: 0.07,
      },
      markers: [
        {
          latlng: {
            latitude: 49.6097942,
            longitude: 6.1330438,
          },
          title: 'Restaurant Clairefontaine',
          description: 'Restaurant',
        },
        {
          latlng: {
            latitude: 49.610992,
            longitude: 6.1291531,
          },
          title: 'Grand Café by RedBeef',
          description: 'Restaurant',
        },
        {
          latlng: {
            latitude: 49.6101279,
            longitude: 6.1292419,
          },
          title: 'Restaurant Ambrosia',
          description: 'Restaurant grec',
        },
        {
          latlng: {
            latitude: 49.610039,
            longitude: 6.1283558,
          },
          title: 'Restaurant L\'Adresse',
          description: 'Restaurant',
        },
        {
          latlng: {
            latitude: 49.611384,
            longitude: 6.1327109,
          },
          title: 'Ristorante Essenza',
          description: 'Restaurant italien',
        },
        {
          latlng: {
            latitude: 49.6180017,
            longitude: 6.1420267,
          },
          title: 'Tempo',
          description: 'Restaurant',
        },
        {
          latlng: {
            latitude: 49.6030021,
            longitude: 6.13459,
          },
          title: 'Lux\'burgers',
          description: 'Restaurant',
        },
        {
          latlng: {
            latitude: 49.6027388,
            longitude: 6.1260344,
          },
          title: 'Athena',
          description: 'Restaurant',
        }
      ]
    };
    this.onluxburgerPress = this.onluxburgerPress.bind(this);
    this.onClairefontainePress = this.onClairefontainePress.bind(this);
    this.markerRefs = {};
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  onluxburgerPress() {
    this.markerRefs['Lux\'burgers']._component.showCallout();
  }

  onClairefontainePress() {
    this.markerRefs['Restaurant Clairefontaine']._component.showCallout();
  }

  render() {
    return (
        <View style={styles.container}>
          <MapView style={ styles.mapStyle } region={ this.state.region }>
            { this.state.markers.map(marker => (
                <Marker.Animated
                    key={ marker.title}
                    ref={ ( ref ) => { this.markerRefs[marker.title] = ref; } }
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                />
            )) }
          </MapView>
          <View style={styles.restoOverview}>
            <ScrollView directionalLockEnabled={ true } horizontal={ true }>
              <TouchableOpacity style={ styles.resto } onPress={ this.onluxburgerPress }>
                <View style={ styles.restoImage }>
                  <Image resizeMode="contain" style={ { width: '100%', height: '100%' } } source={ require( '../assets/images/luxburger.png') } />
                </View>
                <View style={ styles.restoDescription }>
                  <Text style={ styles.restoDescriptionText }>Lux'Burger</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.resto } onPress={ this.onClairefontainePress }>
                <View style={ styles.restoImage }>
                  <Image resizeMode="contain" style={ { width: '100%', height: '100%' } }  source={ require( '../assets/images/clairfontaine.png') } />
                </View>
                <View style={ styles.restoDescription }>
                  <Text style={ styles.restoDescriptionText }>Restaurant Clairefontaine</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 380,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  restoOverview: {
    height: 200,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 200,
  },
  resto: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
  },
  restoImage: {
    width: 240,
    //borderColor: 'black',
    //borderWidth: 1,
    flex: 1,
  },
  restoDescriptionText: {
    fontSize: 18,

  }
});
