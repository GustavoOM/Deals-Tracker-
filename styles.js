import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  //pages/Search.js
  searchContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f5f5f5',
  },


  //pages/GameDetails.js
  gameDetailsContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gameDetailsScrollContent: {
    flexGrow: 1,
  },
  gameDetailsThumb: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  gameDetailsContent: {
    padding: 16,
  },
  gameDetailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38344E',
    marginBottom: 16,
  },
  gameDetailsPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#F6C224',
  },
  gameDetailsSalePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C9049',
  },
  gameDetailsNormalPrice: {
    fontSize: 16,
    color: '#525252',
    textDecorationLine: 'line-through',
  },
  gameDetailsDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#38344E', 
  },
  gameDetailsLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameDetailsDetailIcon: {
    marginRight: 12,
  },
  gameDetailsDetailsLabel: {
    fontSize: 16,
    color: '#525252',
    fontWeight: '500',
  },
  gameDetailsDetailsValue: {
    fontSize: 16,
    color: '#222222',
    fontWeight: 'bold',
  },


  //components/Footer
  footerContent: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38344E',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
  },
  footerLink: {
    color: '#F6C224',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  

  //components/GameCard
  gameCardContent: {
    marginTop: 1,
    borderRadius: 0,
  },
  gameCardTitle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#222222',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  gameCardBotton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
  },
  gameCardBottonLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  gameCardImage: {
    height: 36,
    width: 96,
  },
  gameCardTeamRatingPercentView: {
    height: 32,
    width: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameCardTeamRatingPercentText: {
    color: '#FFF',
  },
  gameCardBottonRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'flex-end',
  },
  gameCardSalePrice: {
    fontWeight: '700',
    fontSize: 16,
    color: '#222222',
  },
  gameCardNormalPrice: {
    fontSize: 12,
    color: '#525252',
    textDecorationLine: 'line-through',
  },


  //components/SearchBar.js
  searchBarContent: {
    backgroundColor: '#38344E',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  searchBarInputStyle: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#DDDDDD',
    padding: 10,
    borderRadius: 2,
    width: '100%',
    placeholderTextColor: '#757575',
  },
  searchBarLogo: {
    height: 48,
  },
  searchBarButton: {
    backgroundColor: '#F6C224',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    width: '100%',
  },


  //components/PriceFilter.js
  priceFilterMinMax: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  priceFilterMinMaxBox: {
    flex: 1,
  },
  priceFilterMinMaxText: {
    fontSize: 12,
    color: '#FFF',
    marginBottom: 4,
  },
  priceFilterMinMaxInput: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#DDDDDD',
    padding: 10,
    borderRadius: 2,
    width: '100%',
  },
  
});