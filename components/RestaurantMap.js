import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
	StyleSheet,
	Dimensions
} from 'react-native';

export default class RestaurantMap extends React.Component {
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
		this.markerRefs = {};
	}

	onRegionChange(region) {
		this.state.region.setValue(region);
	}

	render() {
		return (
			<MapView style={ styles.mapStyle } region={ this.state.region } showsPointsOfInterest="true">
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
		);
	}
}

const styles = StyleSheet.create({
	mapStyle: {
		width: Dimensions.get('window').width,
		height: 300,
	},
});
