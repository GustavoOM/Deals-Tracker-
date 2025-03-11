import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from '../styles';

export const GameCard = ({ item, getScoreColor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.gameCardContent}>
        <View>
          <Text style={styles.gameCardTitle}>{item.title}</Text>
        </View>
        <Card.Content style={styles.gameCardBotton}>
          <View style={styles.gameCardBottonLeft}>
            <Card.Cover source={{ uri: item.thumb }} style={styles.gameCardImage} />
            <View
              style={[
                styles.gameCardTeamRatingPercentView,
                { backgroundColor: getScoreColor(item.metacriticScore) },
              ]}
            >
              <Text style={styles.gameCardTeamRatingPercentText}>{item.metacriticScore}</Text>
            </View>
          </View>
          <View style={styles.gameCardBottonRight}>
            {item.normalPrice !== item.salePrice && (
              <Text style={styles.gameCardNormalPrice}>${item.normalPrice}</Text>
            )}
            <Text style={styles.gameCardSalePrice}>${item.salePrice}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};