import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { GameCard } from '../components/GameCard';
import { fetchDeals } from '../services/api';
import { getScoreColor } from '../services/utils';
import { styles } from '../styles';
import { Footer } from '../components/Footer';


export function Search({ navigation }) { 
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchDeals(searchQuery);
      setList(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  fetchData();
}, [searchQuery]);

  const filteredList = list.filter((item) => {
    const price = parseFloat(item.salePrice);
    return (
      (minPrice === '' || price >= parseFloat(minPrice)) &&
      (maxPrice === '' || price <= parseFloat(maxPrice))
    );
  });

  return (
    <View style={styles.searchContainer}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onSearch={fetchData}
      />
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={filteredList}
          renderItem={({ item }) => (
            <GameCard
              item={item}
              getScoreColor={getScoreColor}
              onPress={() => navigation.navigate('GameDetails', { game: item })} 
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<Footer />} 

        />
      )}
    </View>
  );
}