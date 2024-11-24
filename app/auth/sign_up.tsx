import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput, SegmentedButtons, Divider } from 'react-native-paper';
import React from 'react';

function SignUp() {

  const router = useRouter();
  // for both
  const [accountType, setAccountType] = React.useState('consumer');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  // only for consumer
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  // only for restaurant
  const [resName, setResName] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [street, setStreet] = React.useState('');

  // reqeust to backend
  // we have the user id, user "key"

  function HandleSignUp(accountType:string, email:string, username:string, password:string, firstName:string, lastName:string, resName:string, state:string, city:string, street:string) {
    // communicate to the backend
    // fetch call that sends email, username, password etc.
    // if our sign up is successful then we 
    router.push("../(tabs)")
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
      <ThemedText type='subtitle'>Sign up</ThemedText>
      <SegmentedButtons
        style={styles.segmentedButton}
        value={accountType}
        onValueChange={setAccountType}
        buttons={[
          {
            value: 'consumer',
            label: 'Consumer',
            checkedColor: 'black',
            uncheckedColor: 'white'
          },
          {
            value: 'restaurant',
            label: 'Restaurant',
            checkedColor: 'black',
            uncheckedColor: 'white'
          }
        ]}
      />
      {accountType === "consumer" && (
        <View style={styles.container}>
          <TextInput value={firstName} onChangeText={(v) => setFirstName(v)} style={{backgroundColor: 'black', width: '50%'}} mode='outlined' label='First' textColor='white'></TextInput>
          <TextInput value={lastName} onChangeText={(v) => setLastName(v)} style={{backgroundColor: 'black', width: '50%'}} mode='outlined' label='Last' textColor='white'></TextInput>
        </View>
      )}
      {accountType === "restaurant" && (
        <View style={{gap: 16}}>
          <TextInput value={resName} onChangeText={(v) => setResName(v)} style={styles.input} mode='outlined' label='Restaurant Name' textColor='white'></TextInput>
          <View style={styles.container}>
            <TextInput value={city} onChangeText={(v) => setCity(v)} style={{backgroundColor: 'black', width: '50%'}} mode='outlined' label='City' textColor='white'></TextInput>
            <TextInput value={state} onChangeText={(v) => setState(v)} style={{backgroundColor: 'black', width: '50%'}} mode='outlined' label='State' textColor='white'></TextInput>
          </View>
          <TextInput value={street} onChangeText={(v) => setStreet(v)} style={styles.input} mode='outlined' label='Street' textColor='white'></TextInput>
        </View>
      )}
      <TextInput value={email} onChangeText={(v) => setEmail(v)} style={styles.input} mode='outlined' label='Email' textColor='white'></TextInput>
      <TextInput value={username} onChangeText={(v) => setUsername(v)} style={styles.input} mode='outlined' label='Username' textColor='white'></TextInput>
      <TextInput value={password} onChangeText={(v) => setPassword(v)} style={styles.input} mode='outlined' label='Password' textColor='white'></TextInput>
      <View style={styles.button}>
        <Button title="Sign Up" onPress={() => HandleSignUp(accountType, email, username, password, firstName, lastName, resName, state, city, street)} color="#e8792e"></Button>
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
    backgroundColor: 'black',
    width: '100%'
  },
  button: {
    position: 'relative', // Adjust distance from the bottom of the screen
    padding: 10,
    borderRadius: 5,
    top: 30,
    paddingBottom: 100
  },
  segmentedButton: {
    
  },
  container: {
    flexDirection: 'row',  // Aligns children horizontally
    //justifyContent: 'space-between',  // Optional: adds space between the inputs
    alignItems: 'center',  // Optional: vertically centers inputs if they have different heights
  }
});
export default SignUp;