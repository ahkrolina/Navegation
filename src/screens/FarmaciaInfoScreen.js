import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FarmaciaInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tecnólogo em farmácia forma profissionais capazes de planejarem e gerenciarem o comércio, atendimento, marketing, estoque, recursos financeiros e humanos das farmácias e empresas do ramo farmacêutico.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'darkred',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
