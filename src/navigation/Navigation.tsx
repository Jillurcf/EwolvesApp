// // navigation/Navigation.tsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import InitialScreen from '../screens/InitialScreen';
// import ObUserAuthentication from '../screens/ObUserAuthentication';
// import Login from '../screens/auth/login/Login';
// import SignupForm from '../screens/auth/signup/Signup';
// import SelectInterest from '../screens/SelectInterest'
// import NewUser from '../screens/auth/newUser/NewUser';
// import UserHome from '../screens/userHome/UserHome';

// export type RootStackParamList = {
//   InitialScreen: undefined;
//   ua: undefined;
//   login: undefined;
//   signup: undefined;
//   selectInterest: undefined;
//   newUser: undefined;
//   userHome: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const Navigation: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: true}}>
//       <Stack.Screen 
//           name="InitialScreen" 
//           component={InitialScreen} 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen 
//           name="ua" 
//           component={ObUserAuthentication} 
//           options={{ headerShown: true, headerTitle: "", 
//             headerStyle: {
//                 backgroundColor: "#F0EEFD", 
//                 // backgroundColor: "#F0EEFD", 
                
//               },
//               headerShadowVisible: false


//           }} 
//         />
//         <Stack.Screen 
//           name="login" 
//           component={Login} 
//           options={{ headerShown: true, headerTitle: "", 
//             headerStyle: {
//                 backgroundColor: "#EDF9F0", 
//                 // backgroundColor: "#F0EEFD", 
                
//               },
//               headerShadowVisible: false


//           }} 
//         />
//         <Stack.Screen 
//           name="signup" 
//           component={SignupForm} 
//           options={{ headerShown: true, headerTitle: "", 
//             headerStyle: {
//                 backgroundColor: "#F0EEFD", 
               
                
//               },
//               headerShadowVisible: false


//           }} 
//         />
      
//         <Stack.Screen 
//           name="selectInterest" 
//           component={SelectInterest} 
//           options={{ headerShown: true, headerTitle: "", 
//             headerStyle: {
//                 backgroundColor: "#F0EEFD", 
               
                
//               },
//               headerShadowVisible: false


//           }} 
//         />      
//         <Stack.Screen 
//           name="newUser" 
//           component={NewUser} 
//           options={{ headerShown: true, headerTitle: "", 
//             headerStyle: {
//                 backgroundColor: "#F0EEFD",               
//               },
//               headerShadowVisible: false
//           }} 
//         />      
//         <Stack.Screen 
//           name="userHome" 
//           component={UserHome} 
//           options={{ headerShown: false, headerTitle: "", 
//             headerStyle: {
//                 backgroundColor: "#FEFEFE",               
//               },
//               headerShadowVisible: false
//           }} 
//         />      
//       </Stack.Navigator>
     
//     </NavigationContainer>
//   );
// };



// export default Navigation;




// navigation/Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InitialScreen from '../screens/InitialScreen';
import ObUserAuthentication from '../screens/ObUserAuthentication';
import Login from '../screens/auth/login/Login';
import SignupForm from '../screens/auth/signup/Signup';
import SelectInterest from '../screens/SelectInterest';
import NewUser from '../screens/auth/newUser/NewUser';
import UserHome from '../screens/userHome/UserHome';
import OtherScreen from '../screens/SelectInterest'; // Example additional screen for drawer
import CustomDrawerContent from '../screens/userHome/drawerNavigation/CustomDrawerContent';
import EditProfile from '../screens/drawerNavigation/EditProfile';
import Settings from '../screens/drawerNavigation/Settings';
import Archives from '../screens/drawerNavigation/Archive';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ArchiveIcon from 'react-native-vector-icons/Octicons';
import Notifications from '../screens/userHome/notifications/Notifications';
import Baricons from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen')
export type RootStackParamList = {
  InitialScreen: undefined;
  ua: undefined;
  login: undefined;
  signup: undefined;
  selectInterest: undefined;
  newUser: undefined;
  userHome: undefined;
  notifications: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const MainStackNavigator: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleDrawer = () => {
    navigation.openDrawer(); 
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
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
        options={{ headerShown: false, headerTitle: "", 
          headerStyle: {
              backgroundColor: "#FEFEFE",
            },
            headerShadowVisible: false
        }} 
      />      
      <Stack.Screen 
        name="notifications" 
        component={Notifications} 
        options={{ headerShown: true, headerTitle: "", 
          headerStyle: {
              backgroundColor: "#FEFEFE",
            },
            headerShadowVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={handleDrawer} style={{ marginRight: 10 }}>
                <Baricons name="bars" size={30} color="#6C6C6C" />
              </TouchableOpacity>
            ),
        }} 
      />      
    </Stack.Navigator>
  );
};


// const CustomHeaderTitle = () => {
//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Icon name="user" size={25} color="red" />
//       <Text style={{ marginLeft: 10, fontSize: 18, color: '#000' }}>Edit Profile</Text>
//     </View>
//   );
// };

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: '#FEFEFE', 
            borderTopRightRadius: 20, 
            borderBottomRightRadius: 20, 
            width:300, 
          },
          headerStyle: {
            backgroundColor: "#FEFEFE",
            
          },
          headerShadowVisible: false,
        }}
        initialRouteName="UserHome"
      >
        <Drawer.Screen  options={{
    headerShown: false,
    headerTitle: "", 
    drawerLabel: () => null, 
    drawerItemStyle: { height: 0 }, 
  }}  
  
  name="Main" component={MainStackNavigator} />
        <Drawer.Screen
         options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Edit Profile", 
         
          drawerIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={"#AEE2FF"} />
          ),
          drawerItemStyle: {
            // backgroundColor: 'red',
            borderWidth: 2,
            borderColor: '#F5F5F5',
            paddingVertical: 5,
            borderRadius: 10,
            // marginVertical: 20,
          }
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.goBack()}>
          //     <Icon name="user" size={25} color="red" style={{ marginLeft: 0 }} />
          //   </TouchableOpacity>
          // ),
        })} 
        name="Edit Profile" component={EditProfile} />
        <Drawer.Screen 
        name="Settings" component={Settings}
        options={{
          
          drawerIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={"#D1A8FF"} />
          ),
        drawerItemStyle: {
          // backgroundColor: 'red',
          borderWidth: 2,
          borderColor: '#F5F5F5',
          paddingVertical: 5,
          marginVertical: 20,
          borderRadius: 10,
        }
        }}
        />
        <Drawer.Screen name="Archive" component={Archives}
         options={{
          drawerIcon: ({ color, size }) => (
            <ArchiveIcon name="archive" size={size} color={"#8EE88E"} />
          ),
          drawerItemStyle: {
            // backgroundColor: 'red',
            borderWidth: 2,
            borderColor: '#F5F5F5',
            paddingVertical: 5,
            borderRadius: 10,
            // marginVertical: 20,
          }
        }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
