import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Auth = createStackNavigator();

const UserRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      // headerShown: false,
      headerTintColor: '#f4ede8',
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="Usuários" component={Main} />
    <Auth.Screen name="User" component={User} />
  </Auth.Navigator>
);

export default UserRoutes;
