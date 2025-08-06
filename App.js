import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

export default function App() {
  const user = true; // 🔒 Hardcoded for now (simulate logged in)

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
