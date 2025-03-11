import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Footer } from '../components/Footer';
import { styles } from '../styles';

export const GameDetails = ({ route }) => {
  const { game } = route.params;

  return (
    <View style={styles.gameDetailsContainer}>
      <ScrollView contentContainerStyle={styles.gameDetailsScrollContent}>
        <Image source={{ uri: game.thumb }} style={styles.gameDetailsThumb} />
        <View style={styles.gameDetailsContent}>
          <Text style={styles.gameDetailsTitle}>{game.title}</Text>
          <View style={styles.gameDetailsPriceContainer}>
            {game.normalPrice !== game.salePrice && (
              <Text style={styles.gameDetailsNormalPrice}>${game.normalPrice}</Text>
            )}
            <Text style={styles.gameDetailsSalePrice}>${game.salePrice}</Text>
          </View>
          <View style={styles.gameDetailsDetailsContainer}>
            <View style={styles.gameDetailsLeftContainer}>
              <View style={styles.gameDetailsDetailIcon}>
                <MaterialIcons name="savings" size={20} color="#F6C224" />
              </View>
              <Text style={styles.gameDetailsDetailsLabel}>Economia:</Text>
            </View>
            <Text style={styles.gameDetailsDetailsValue}>{parseFloat(game.savings).toFixed(0)}%</Text>
          </View>
          <View style={styles.gameDetailsDetailsContainer}>
            <View style={styles.gameDetailsLeftContainer}>
              <View style={styles.gameDetailsDetailIcon}>
                <MaterialIcons name="star" size={20} color="#F6C224" />
              </View>
              <Text style={styles.gameDetailsDetailsLabel}>Avaliação Metacritic:</Text>
            </View>
            <Text style={styles.gameDetailsDetailsValue}>{game.metacriticScore}</Text>
          </View>
          <View style={styles.gameDetailsDetailsContainer}>
            <View style={styles.gameDetailsLeftContainer}>
              <View style={styles.gameDetailsDetailIcon}>
                <MaterialIcons name="edit-square" size={20} color="#F6C224" />
              </View>
              <Text style={styles.gameDetailsDetailsLabel}>Avaliação Steam:</Text>
            </View>
            <Text style={styles.gameDetailsDetailsValue}>
              {game.steamRatingText}
            </Text>
          </View>
          <View style={styles.gameDetailsDetailsContainer}>
            <View style={styles.gameDetailsLeftContainer}>
              <View style={styles.gameDetailsDetailIcon}>
                <MaterialIcons name="event" size={20} color="#F6C224" />
              </View>
              <Text style={styles.gameDetailsDetailsLabel}>Data de lançamento:</Text>
            </View>
            <Text style={styles.gameDetailsDetailsValue}>
              {new Date(game.releaseDate * 1000).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.gameDetailsDetailsContainer}>
            <View style={styles.gameDetailsLeftContainer}>
              <View style={styles.gameDetailsDetailIcon}>
                <MaterialIcons name="update" size={20} color="#F6C224" />
              </View>
              <Text style={styles.gameDetailsDetailsLabel}>Última atualização:</Text>
            </View>
            <Text style={styles.gameDetailsDetailsValue}>
              {new Date(game.lastChange * 1000).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};
