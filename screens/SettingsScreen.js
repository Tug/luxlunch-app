import React from 'react';;
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
    <ScrollView
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
        <Image
            style={styles.avatar}
            source={require('../assets/images/me.jpg')}
        />
        <View style={ { flex: 1 } }>
          <Text style={styles.userFullName}>Tugdual de Kerviler</Text>
          <Text style={styles.userCompany}>Luxlunch Inc.</Text>
        </View>
      </View>

      <View style={ { flex: 1, flexDirection: 'row', marginTop: 30, marginBottom: 30 } }>
        <View style={ styles.sectionContainer }>
          <Text style={styles.sectionValue}>€ 198,40</Text>
          <Text style={styles.sectionLabel}>Montant total disponible</Text>
        </View>
        <View style={ styles.sectionContainer }>
          <Text style={styles.sectionValue}>€ 21.60</Text>
          <Text style={styles.sectionLabel}>À dépenser aujourd'hui</Text>
        </View>
      </View>


      <View style={ { flex: 1, width: '100%', alignItems: 'center' } }>
        <Text style={ { fontSize: 14 } }>Vos titres-restaurant ont une valeur unitaire de 10,80 €.</Text>
      </View>

    </ScrollView>
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
  avatar: {
    marginRight: 16,
    borderRadius: 48,
    width: 96,
    height: 96
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    justifyContent: 'flex-start',
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
    flexDirection: 'row',
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: 'normal',
  },
  sectionValue: {
    fontSize: 30,
    fontWeight: '500',
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
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
    textAlign: 'left',
  },
  userCompany: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 34,
    textAlign: 'left',
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
