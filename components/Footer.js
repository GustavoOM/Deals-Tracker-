import React from 'react';
import { View, Text, Linking } from 'react-native';
import { styles } from '../styles';

export const Footer = () => {
  const handlePress = () => {
    Linking.openURL('https://github.com/GustavoOM');
  };
  return (
    <View style={styles.footerContent}>
      <Text style={styles.footerText}>
        Desenvolvido por{' '}
        <Text style={styles.footerLink} onPress={handlePress}>
          Gustavo de Oliveira Martins
        </Text>
      </Text>
    </View>
  );
};
