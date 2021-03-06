import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Register" component={Register} />
  </Auth.Navigator>
);

export default AuthRoutes;
