import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {NativeViewGestureHandler, RectButton} from "react-native-gesture-handler";
import {SafeAreaView, ThemeColors, Themed} from "react-navigation";

const transactions = [
  { label: 'Franprix LRP SARL', amount: '€10.80' },
  { label: 'MC Donald\'s Mt St', amount: '€9.12' },
  { label: 'Boulangerie JP Lop', amount: '€9.12' },
];

export default function TransactionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
          forceInset={{ top: 'never', bottom: 'always' }}
      >
        <View>
          {transactions.map( ( { label, amount } ) => (
              <RectButton
                  key={label}
                  underlayColor="#ccc"
                  activeOpacity={0.3}
                  onPress={() => {}}
              >
                <View style={ styles.item }>
                  <Themed.Text style={ styles.title }>
                    { label }
                  </Themed.Text>
                  <Text style={ styles.description }>
                    { amount }
                  </Text>
                </View>
              </RectButton>
          ))}
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
  description: {
    color: '#999',
    fontSize: 13,
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

