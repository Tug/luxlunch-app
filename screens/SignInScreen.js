import * as React from 'react';
import {
	Button,
	View,
	AsyncStorage,
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class SignInScreen extends React.Component {
	static navigationOptions = {
		title: 'Please sign in',
	};

	render() {
		return (
			<View style={styles.container}>
				<Button title="Sign in!" onPress={this._signInAsync} />
			</View>
		);
	}

	_signInAsync = async () => {
		await AsyncStorage.setItem('userToken', 'abc');
		this.props.navigation.navigate('App');
	};
}
