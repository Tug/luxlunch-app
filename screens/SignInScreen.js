import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	ImageBackground,
} from 'react-native';
import { Button, Input, Text, Icon } from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';

const DEFAULT_OVERLAY_COLOR = 'rgba(0, 0, 0, 0.45)';

export const ImageOverlay = (props) => {
	const { style, children, ...imageBackgroundProps } = props;
	const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style);

	return (
		<ImageBackground
			{...imageBackgroundProps}
			style={imageBackgroundStyle}>
			<View style={[
				StyleSheet.absoluteFill,
				{ backgroundColor: overlayColor || DEFAULT_OVERLAY_COLOR },
			]}/>
			{children}
		</ImageBackground>
	);
};

export const EyeIcon = (style) => (
	<Icon {...style} name='eye'/>
);

export const EyeOffIcon = (style) => (
	<Icon {...style} name='eye-off'/>
);

export const FacebookIcon = (style) => (
	<Icon {...style} name='facebook'/>
);

export const GoogleIcon = (style) => (
	<Icon {...style} name='google'/>
);

export const PersonIcon = (style) => (
	<Icon {...style} name='person'/>
);

export const TwitterIcon = (style) => (
	<Icon {...style} name='twitter'/>
);

export default ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [passwordVisible, setPasswordVisible] = useState(false);

	const onSignInButtonPress = async () => {
		await AsyncStorage.setItem('userToken', 'abc');
		navigation && navigation.navigate('App');
	};

	const onSignUpButtonPress = () => {
		navigation && navigation.navigate('SignUp');
	};

	const onForgotPasswordButtonPress = () => {
		navigation && navigation.navigate('ForgotPassword');
	};

	const onPasswordIconPress = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<KeyboardAvoidingView>
			<ImageOverlay
				style={styles.container}
				source={require('../assets/images/signin-background.jpg')}>
				<View style={styles.headerContainer}>
					<Text
						category='h1'
						status='control'>
						Bienvenue
					</Text>
					<Text
						style={styles.signInLabel}
						category='s1'
						status='control'>
						Connectez-vous à votre compte Luxlunch
					</Text>
				</View>
				<View style={styles.formContainer}>
					<Input
						status='control'
						placeholder='E-mail'
						icon={PersonIcon}
						value={email}
						onChangeText={setEmail}
					/>
					<Input
						style={styles.passwordInput}
						status='control'
						placeholder='Mot de passe'
						icon={passwordVisible ? EyeIcon : EyeOffIcon}
						value={password}
						secureTextEntry={!passwordVisible}
						onChangeText={setPassword}
						onIconPress={onPasswordIconPress}
					/>
					<View style={styles.forgotPasswordContainer}>
						<Button
							style={styles.forgotPasswordButton}
							appearance='ghost'
							status='control'
							onPress={onForgotPasswordButtonPress}>
							Mot de passe oublié?
						</Button>
					</View>
				</View>
				<Button
					style={styles.signInButton}
					size='giant'
					onPress={onSignInButtonPress}>
					CONNEXION
				</Button>
				<Button
					style={styles.signUpButton}
					appearance='ghost'
					status='control'
					onPress={onSignUpButtonPress}>
					Pas encore de compte? Inscrivez-vous
				</Button>
			</ImageOverlay>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		minHeight: 216,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
	signInLabel: {
		marginTop: 16,
	},
	passwordInput: {
		marginTop: 16,
	},
	signInButton: {
		marginHorizontal: 16,
	},
	forgotPasswordContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	forgotPasswordButton: {
		paddingHorizontal: 0,
	},
	signUpButton: {
		marginVertical: 12,
	},
	socialAuthContainer: {
		marginTop: 32,
	},
	socialAuthButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	socialAuthHintText: {
		alignSelf: 'center',
		marginBottom: 16,
	},
});

