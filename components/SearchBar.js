import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';
import { PriceFilter } from './PriceFilter';

export const SearchBar = ({ searchQuery, setSearchQuery, minPrice, setMinPrice, maxPrice, setMaxPrice, onSearch }) => {
  return (
    <View style={styles.searchBarContent}>
      <Image source={require('../assets/Logo.png')} style={styles.searchBarLogo} />
      <TextInput
        style={[styles.searchBarInputStyle, { fontWeight: '600', fontSize: 16, lineHeight: 16, letterSpacing: 0, textAlign: 'center' }]}
        placeholder="Buscar por título"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <PriceFilter
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <TouchableOpacity style={styles.searchBarButton} onPress={onSearch}>
        <Text style={{   fontWeight: '600', fontSize: 16, lineHeight: 16, letterSpacing: 0, textAlign: 'center', color: '#000' }}>Mostrar resultados</Text>
      </TouchableOpacity>
    </View>
  );
};