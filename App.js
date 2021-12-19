import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main_Screen from './src/Screen/Main_Screen';
import Public_Signin from './src/Screen/User_Signin'
import Public_Login from './src/Screen/User_Login';
import Navigation_App from './src/Config/Navigation'
export default function App() {
  return (

      <Navigation_App />
     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: 'center',
    position:"absolute",
    top:250,
    left:85
  },
});
