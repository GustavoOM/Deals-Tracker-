import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles';

export const PriceFilter = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <View style={styles.priceFilterMinMax}>
      <View style={styles.priceFilterMinMaxBox}>
        <Text style={styles.priceFilterMinMaxText}>MENOR PREÇO:</Text>
        <TextInput
          style={styles.priceFilterMinMaxInput}
          value={minPrice}
          onChangeText={(text) => setMinPrice(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.priceFilterMinMaxBox}>
        <Text style={styles.priceFilterMinMaxText}>MAIOR PREÇO:</Text>
        <TextInput
          style={styles.priceFilterMinMaxInput}
          value={maxPrice}
          onChangeText={(text) => setMaxPrice(text)}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};