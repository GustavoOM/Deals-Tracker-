import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Search } from './pages/Search';
import { GameDetails } from './pages/GameDetails';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
          backgroundColor="#38344E"
          barStyle="light-content"
        />
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GameDetails"
          component={GameDetails}
          options={{
            headerShown: true,
            title: 'Detalhes do Jogo',
            headerStyle: {
              backgroundColor: '#38344E',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}