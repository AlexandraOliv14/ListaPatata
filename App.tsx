import 'react-native-gesture-handler';

import React, { useContext } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './views/Home';
import { Notifications } from './views/Notifications';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import { Config } from './views/Config';

const Drawer = createDrawerNavigator();

const App =() => {

  return (
    <AppState>
      <Navigation/>
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

const Navigation = () =>{
  const { theme: { viewStyle, currentTheme, cardStyle } } = useContext(ThemeContext);

  return (
    <NavigationContainer
      >
        <Drawer.Navigator initialRouteName="Home" 
          screenOptions={{
            drawerStyle: cardStyle,
            headerStyle: {...viewStyle, borderBottomWidth:2}
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Configuracion" component={Config} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}