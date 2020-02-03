import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import MapView from 'react-native-maps';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
  return (
      <View style={styles.container}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
                source={
                  //__DEV__
                  //  ? require('../assets/images/robot-dev.png')
                  //  : require('../assets/images/robot-prod.png')
                  require('../assets/images/logo.png')
                }
                style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.userFullName}>François Brussieux</Text>
          </View>

          <View style={ { flex: 1, flexDirection: 'row', marginTop: 30, marginBottom: 30 } }>
            <View style={ styles.sectionContainer }>
              <Text style={styles.sectionLabel}>Montant disponible</Text>
              <Text style={styles.sectionValue}>€ 98,9 / 194,4</Text>
            </View>
            <View style={ styles.sectionContainer }>
              <Text style={styles.sectionLabel}>Prochain rechargement</Text>
              <Text style={styles.sectionValue}>2 Février (3j)</Text>
            </View>
          </View>

        </ScrollView>
      </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  sectionValue: {
    fontSize: 20,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  userFullName: {
    fontSize: 27,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 34,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
