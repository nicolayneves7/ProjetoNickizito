import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./scr/Presentation/views/home/home";
import { RegisterScreen } from './scr/components/Register/Register';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false

      }}>
        <Stack.Screen
          name='Registro'
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;