import React from 'react';
import MapView, { AnimatedRegion, Animated, Marker } from 'react-native-maps';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import {
  Card,
  CardHeader,
  Text,
} from '@ui-kitten/components';
import RestaurantList from '../components/restaurant-list';

export default class HomeScreen extends React.Component {
  render() {
    return (
        <ScrollView>
          <View style={ { margin: 20 } }>
            <Text style={styles.sectionLabel}>Autour de vous</Text>
          </View>

          <RestaurantList />

          <View style={ { margin: 20 } }>
            <Text style={styles.sectionLabel}>Disponibles en livraison!</Text>
          </View>

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
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  sectionValue: {
    fontSize: 26,
    fontWeight: '500',
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
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
  restoDescription: {
    padding: 10,
  },
  restoDescriptionText: {
    fontSize: 16,
  },
});
