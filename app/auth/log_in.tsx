import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput } from 'react-native-paper';
import React from 'react';

function LogIn() {

  const router = useRouter();

  const [emailUser, setEmailUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  function HandleLogin() {
		// send username or email and pass to backend
		// return to home page if successful login
		// console.log("Username/Email: " + emailUser);
		// console.log("Password: " + pass);

		router.push("../(tabs)");
	}


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#c3ae9c' }}
      headerImage={
        <Image
          source={require('@/assets/images/sizzler_logo.png')}
          style={styles.sizzlerLogo}
        />
      }>
      <ThemedText type='title'>Welcome To Sizzler!</ThemedText>
      <ThemedText type='subtitle'>Log in</ThemedText>
      <TextInput value={emailUser} onChangeText={(v) => setEmailUser(v)}  style={styles.input} mode='outlined' label='Username/Email' textColor='white'></TextInput>
      <TextInput value={pass} onChangeText={(v) => setPass(v)}  style={styles.input} mode='outlined' label='Password' textColor='white'></TextInput>
      <View style={styles.button}>
        <Button title="Log In" onPress={HandleLogin} color="#e8792e"></Button>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    fontWeight: '500',
    color: 'white',
  },
  sizzlerLogo: {
    height: 270,
    width: "100%",
    bottom: 0,
    left: 0,
    alignContent: 'center',
    position: 'absolute',
  },
  input: {
    backgroundColor: 'black'
  },
  button: {
    position: 'relative', // Adjust distance from the bottom of the screen
    padding: 10,
    borderRadius: 5,
    top: 30
  } 
});
export default LogIn;
