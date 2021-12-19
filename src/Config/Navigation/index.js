import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main_Screen from '../../Screen/Main_Screen';
import Public_Login from '../../Screen/User_Login';
import Public_Signin from '../../Screen/User_Signin';
import Manager_Login from '../../Screen/Manager_Login';
import User_Dashboard from '../../Screen/User_Dashboard';
import Map from '../../Screen/Map';
const Stack = createNativeStackNavigator();

function Navigation_App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown:false}} name="Main Screen" component={Main_Screen} />
        <Stack.Screen options={{ headerShown:false}} name="Login" component={Public_Login} />
        <Stack.Screen options={{ headerShown:false}} name="Signin" component={Public_Signin} />
        <Stack.Screen options={{ headerShown:false}} name="Manager Login" component={Manager_Login} />
        <Stack.Screen options={{ headerShown:false}} name="User_Dashboard" component={User_Dashboard} />
        <Stack.Screen options={{ headerShown:false}} name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation_App;