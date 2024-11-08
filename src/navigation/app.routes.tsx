import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../scenes/home';
import History from '../scenes/history';

const AppRoutes: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="História" component={History} options={{headerBackButtonDisplayMode: 'minimal'}}
      />

    </Stack.Navigator>
  );
};

export default AppRoutes;
