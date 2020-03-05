import React from 'react';
import { Image, ImageResizeMode, ScrollView, StyleSheet, Text, View } from 'react-native';
import {NativeViewGestureHandler, RectButton} from "react-native-gesture-handler";
import {SafeAreaView, ThemeColors, Themed} from "react-navigation";

const transactions = [
  { label: 'Franprix LRP SARL', amount: '10.80' },
  { label: 'MC Donald\'s Mt St', amount: '9.12' },
  { label: 'Boulangerie JP Lop', amount: '3.00' },
  { label: 'Cocottes', amount: '42.02' },
  { label: 'Victorine', amount: '12.30' },
  { label: 'Baazar', amount: '16.70' },
  { label: 'Restaurant Clairefontaine', amount: '100.00' },
];
function round_to_precision(x, precision) {
  var y = +x + (precision === undefined ? 0.5 : precision/2);
  return y - (y % (precision === undefined ? 1 : +precision));
}

export default function TransactionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
          forceInset={{ top: 'never', bottom: 'always' }}
      >
        <View>
          <Text style={ { padding: 5, fontSize: 18 }}>Solde Titres-restaurant</Text>
        </View>
        <View>
          { transactions.map( ( { label, amount } ) => {
            return (
                <RectButton
                    key={label}
                    underlayColor="#ccc"
                    activeOpacity={0.3}
                    onPress={() => {}}
                >
                  <View style={ styles.item }>
                    <View style={ styles.labelSection }>
                      <Themed.Text style={ styles.title }>
                        { label }
                      </Themed.Text>
                      <Text style={ styles.labelTxId }>
                        { Math.random().toString(36).substring(4).toUpperCase() }
                      </Text>
                    </View>
                    <View style={ styles.cardSection }>
                      { Number( amount ) > 21.6
                          ? <Image
                              resizeMode="contain"
                              style={{width: 50, height: 30}}
                              source={require('../assets/images/mastercard-sm.jpeg')}
                          />
                          : <View style={ { paddingTop: 9, paddingBottom: 9, paddingRight: 1, paddingLeft: 1, borderWidth: 1, borderColor: '#424242', borderRadius: 3 } }>
                              <Text style={ { fontSize: 9, fontWeight: 'bold', color: '#424242' } }>Luxlunch</Text>
                          </View>
                      }
                    </View>
                    <Text style={ styles.description }>
                      { '-' + amount + ' €' }
                    </Text>
                  </View>
                </RectButton>
            );
          } ) }
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

TransactionsScreen.navigationOptions = {
  title: 'Transactions',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelTxId: {

  },
  description: {
    color: '#424242',
    fontSize: 16,
    width: 85,
    textAlign: 'right',
  },
  item: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelSection: {
    width: '60%',
  },
  cardSection: {
    width: 50,
  }
});

