import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './scr/Presentation/views/home/home';
import RegisterScreen from './scr/Presentation/views/Register/Register';
import RecuperarSenha from './scr/Presentation/views/recuperarsenha/recuperarsenha';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RecuperarSenha: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Novo usuário',
          }}
        />

        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{
            headerShown: true,
            title: 'Recuperar Senha',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;