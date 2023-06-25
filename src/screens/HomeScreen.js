import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
      <Button title="ADM" onPress={() => navigation.navigate('ADM')} />
      <Button title="Desenvolvimento de Sistemas" onPress={() => navigation.navigate('Desenvolvimento')} />
      <Button title="Farmácia" onPress={() => navigation.navigate('Farmacia')} />
    </View>
  );
}
