import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const OnboardScreen = ({ navigation}) => {
  return(
    <View style = {{flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
      <Text> Please Sign In </Text>
    </View>
  );
}

const StartScreen = ({navigation }) => {
  return(
    <View style = {{flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
      <Text> Welcome To Kampung Kakis </Text>
      <Button 
        title = 'Enter!'
        onPress ={() => navigation.navigate('OnboardScreen')} /> 
    </View>
  )
}
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Start" component = {StartScreen} />  
        <Stack.Screen name ="Onboard" component = {OnboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import SplashScreen from './splash'

function SplashScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
      <Button title="Start" onPress={() => navigation.navigate('HomeScreen')}/>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import login from "./login"
import { Button } from 'galio-framework';

import import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <View style={styles.container}>
      <Text>Please code faster</Text>
      <Button round uppercase color="error">Login</Button>
      <StatusBar style="auto" />
    </View>
    </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/