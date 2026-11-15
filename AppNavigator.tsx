import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PrivacyScreen from '../screens/PrivacyScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
    >

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Criar conta',
          headerTintColor: '#142B4A',
          headerStyle: {
            backgroundColor: '#F5F7FA',
          },
        }}
      />

      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          title: 'Privacidade',
          headerTintColor: '#142B4A',
          headerStyle: {
            backgroundColor: '#F5F7FA',
          },
        }}
      />

    </Stack.Navigator>
  );
}