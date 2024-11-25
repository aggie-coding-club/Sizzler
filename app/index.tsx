import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/sizzler_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Sizzler!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => router.push('/auth/log_in')} color="#4CAF50" />
        <Button title="Sign Up" onPress={() => router.push('/auth/sign_up')} color="#FF5722" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
});
