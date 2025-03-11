import axios from 'axios';

export const fetchDeals = async (searchQuery) => {
  try {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals', {
      params: {
        title: searchQuery,
        pageSize: 100,
        storeID: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};