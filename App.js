import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  const [text, setText] = useState("Type here!");

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Roboto_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    // Show a loading spinner while fonts load
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Font Style Playground</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={setText}
        value={text}
      />

      <Text style={{ ...styles.fontText, fontFamily: 'Montserrat_400Regular' }}>
        Montserrat: {text}
      </Text>

      <Text style={{ ...styles.fontText, fontFamily: 'Roboto_400Regular' }}>
        Roboto: {text}
      </Text>

      <Text style={{ ...styles.fontText, fontFamily: 'Poppins_400Regular' }}>
        Poppins: {text}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 30,
    fontSize: 18,
  },
  fontText: {
    fontSize: 24,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
