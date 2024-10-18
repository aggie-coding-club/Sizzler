import { Image,  Platform,View, Text, TextInput,TouchableOpacity,ActivityIndicator, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
//import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { supabase } from '@/lib/supabase';
//var supabase = require("../lib/supabase"); 

export default function Loginscreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // if (!email || !password) {
    //     Alert.alert("Error", "Please fill in both email and password fields");
    //     return;
    //   }
    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })

        if (error) Alert.alert(error.message);
        else Alert.alert('Login Successful', `Welcome ${email}`);
        setLoading(false)
    }
    const handleLogin = async () => {
      setLoading(true);
    
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
    
        if (data.success) {
          Alert.alert('Login Successful', `Welcome ${data.user.name}`);
          //Alert.alert('Login Successful', `Welcome ${data.user.name}`);
          // Optionally navigate to another screen
        } else {
          Alert.alert('Login Failed', data.message || 'Invalid credentials');
        }
    
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to login, please try again later.');
      } finally {
        setLoading(false);
      }
    };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sizzler_logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Sizzler</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Login</ThemedText>
        
          {/* <ThemedText type="defaultSemiBold">Email</ThemedText> */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {/* <ThemedText type="defaultSemiBold">
            Password
          </ThemedText> */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
      {/* <Button title={loading ? "Logging in..." : "Login"} onPress={handleLogin} /> */}
      {/* <Button
          title={loading ? "Signing in..." : "Sign In"}
          onPress={signInWithEmail}
          disabled={loading}
        /> */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={signInWithEmail}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.signInButtonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color:'#ccc'
  },
  signInButton: {
    backgroundColor: '#FF3B30', // Red background color
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF', // White text color
  },
});