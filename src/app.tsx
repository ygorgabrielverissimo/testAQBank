import React, {FC} from 'react';
//import '~/utils/config/reactotron';
import {Provider, ThemeProvider} from 'react-native-paper';
import Routes from './navigation';
import {NavigationContainer} from '@react-navigation/native';


const App: FC = () => {


  return (
    <NavigationContainer>
      <Provider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
