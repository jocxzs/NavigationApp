import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Log Off"
          onPress={ async (loginkey) => {navigation.navigate('Login'); await AsyncStorage.setItem(null, JSON.stringify(loginkey));}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    width: windowWidth * 0.8,
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
