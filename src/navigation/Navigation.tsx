// navigation/Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';
import ObUserAuthentication from '../screens/ObUserAuthentication';
import Login from '../screens/auth/login/Login';
import SignupForm from '../screens/auth/signup/Signup';
import SelectInterest from '../screens/SelectInterest'
import NewUser from '../screens/auth/newUser/NewUser';
import UserHome from '../screens/userHome/UserHome';

export type RootStackParamList = {
  InitialScreen: undefined;
  ua: undefined;
  login: undefined;
  signup: undefined;
  selectInterest: undefined;
  newUser: undefined;
  userHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true}}>
      <Stack.Screen 
          name="InitialScreen" 
          component={InitialScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ua" 
          component={ObUserAuthentication} 
          options={{ headerShown: true, headerTitle: "", 
            headerStyle: {
                backgroundColor: "#F0EEFD", 
                // backgroundColor: "#F0EEFD", 
                
              },
              headerShadowVisible: false


          }} 
        />
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ headerShown: true, headerTitle: "", 
            headerStyle: {
                backgroundColor: "#EDF9F0", 
                // backgroundColor: "#F0EEFD", 
                
              },
              headerShadowVisible: false


          }} 
        />
        <Stack.Screen 
          name="signup" 
          component={SignupForm} 
          options={{ headerShown: true, headerTitle: "", 
            headerStyle: {
                backgroundColor: "#F0EEFD", 
               
                
              },
              headerShadowVisible: false


          }} 
        />
      
        <Stack.Screen 
          name="selectInterest" 
          component={SelectInterest} 
          options={{ headerShown: true, headerTitle: "", 
            headerStyle: {
                backgroundColor: "#F0EEFD", 
               
                
              },
              headerShadowVisible: false


          }} 
        />      
        <Stack.Screen 
          name="newUser" 
          component={NewUser} 
          options={{ headerShown: true, headerTitle: "", 
            headerStyle: {
                backgroundColor: "#F0EEFD",               
              },
              headerShadowVisible: false
          }} 
        />      
        <Stack.Screen 
          name="userHome" 
          component={UserHome} 
          options={{ headerShown: true, headerTitle: "", 
            headerStyle: {
                backgroundColor: "#FEFEFE",               
              },
              headerShadowVisible: false
          }} 
        />      
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};



export default Navigation;
