import 'react-native-gesture-handler';

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './views/Home';
import { Notifications } from './views/Notifications';
import { ThemeProvider } from './contexts/ThemeContext';
import { Config } from './views/Config';

const Drawer = createDrawerNavigator();

const App =() => {

  return (
    <AppState>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Configuracion" component={Config} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppState>
  );
}
// Config

export default App;

const AppState = ({ children }: any) => {
  return(
  // <Provider store={store}>
      <ThemeProvider>
          {/* <PermmissionsProvider> */}
            {children}
          {/* </PermmissionsProvider> */}
      </ThemeProvider>
    // </Provider>
  )
}