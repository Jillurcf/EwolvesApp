import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import UserImg from '../../assets/Images/userHome/userImg.svg';
import Notifyicons from 'react-native-vector-icons/MaterialIcons';
import Baricons from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/FontAwesome'; 
import FilterIcon from 'react-native-vector-icons/Feather'; 
import HomeIcon from 'react-native-vector-icons/Foundation';
import VideoIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHomeHome from './UserHomeHome';
import Video from './video/Video';
import Inbox from './inbox/Inbox';
import Profile from './profile/Profile';

const { width, height } = Dimensions.get('screen');
const isTablet = width >= 768;

const Tab = createBottomTabNavigator();

interface CustomTabBarButtonProps {
  onPress?: () => void; // Adjust type here
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({children, onPress }) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow

  }}
  onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "rgba(236, 227, 236, 0.9)",
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

const UserHomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
    screenOptions={{
    
      headerShown: false,
     tabBarShowLabel: true, 
    
      tabBarStyle: {
        position: 'absolute',
        bottom: height * 0.035,
        left: width * 0.060,
        right: width * 0.060,
        paddingVertical: height * 0.007,
        // elevation: 0,
        // backgroundColor: "#ECE3EC",
        backgroundColor: "rgba(236, 227, 236, 0.9)",
        // opacity: 100,
        borderRadius: width * 0.065,
        height: isTablet ? height * 0.1 : height * 0.070,
        ...styles.shadow,
      },
      tabBarLabelStyle: {
        fontSize:width * 0.025,
        paddingBottom: height * 0.005,
      },
      tabBarItemStyle: {
        justifyContent: 'center',
        // alignItems: 'ceneter',
        // paddingTop: 10,
      },
   
     
    }}

    // tabBarOptions={{
    //   activeTintColor: '#7D6BED',
    //   inactiveTintColor: 'gray',
    // }}
  >

    <Tab.Screen 
      name="Home" 
      component={UserHomeHome} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <HomeIcon name="home" color={color} size={size} />
        ),
           tabBarActiveTintColor: "#8372EE"
      }} 
    />
    <Tab.Screen 
      name="Video" 
      component={Video} 
      options={{
        tabBarLabel: 'Video',
        tabBarIcon: ({ color, size }) => (
          <VideoIcon name="video" color={color} size={size} />
        ),
        tabBarActiveTintColor: "#8372EE"
      }} 
    />
    {/* <Tab.Screen 
      name="Post" 
      component={Inbox} 
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ color, size }) => (
          <Baricons name="pluscircle" color={color} size={size} />
        ),
          tabBarActiveTintColor: "#8372EE",
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
      }} 
    /> */}
    <Tab.Screen 
      name="Inbox" 
      component={Inbox} 
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ color, size }) => (
          <Baricons name="inbox" color={color} size={size} />
        ),
          tabBarActiveTintColor: "#8372EE"
      }} 
    />
    <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Baricons name="user" color={color} size={size} />
        ),
          tabBarActiveTintColor: "#8372EE"
      }} 
    />
    
  </Tab.Navigator>
  )
};


const UserHome: React.FC = ({navigation}) => {
  const handleNotifications = () => {
    navigation.navigate('notifications')
  }

  const handleDrawer = () => {
    console.log("object");
    navigation.openDrawer();
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.05 }}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <UserImg />
          <View style={{ paddingVertical: 2 }}>
            <Text>Good Morning</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>User Name</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 5 }}>
         <TouchableOpacity onPress={handleNotifications}>
         <Notifyicons name="circle-notifications" color="#6C6C6C" size={30} />
         </TouchableOpacity>
       <TouchableOpacity onPress={handleDrawer}>
       <Baricons name="bars" size={30} color="#6C6C6C" />
       </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: width * 0.05, paddingVertical: height * 0.02, flexDirection: 'row', gap: 10 }}>
        <View style={styles.searchContainer}>
          <SearchIcon name="search" size={20} color="#6C6C6C" style={styles.searchIcon} />
        </View>
       <TouchableOpacity>
       <View style={{width: width * 0.25}}>
          <LinearGradient
            colors={['#9C8EEF', '#6C57EC', "#5443BB"]}
            style={styles.gradientContainer}
          >
            <FilterIcon style={{ padding: 2 }} name="filter" size={30} color="white" />
          </LinearGradient>
        </View>
       </TouchableOpacity>
      </View>

      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'home') {
              return <HomeIcon name="home" size={size} color={color} />;
            } else if (route.name === 'video') {
              return <VideoIcon name="video-outline" size={size} color={color} />;
            } else if (route.name === 'inbox') {
              return <Baricons name="message1" size={size} color={color} />;
            } else if (route.name === 'profile') {
              return <Baricons name="user" size={size} color={color} />;
            }
          },
          headerShown: false
        })}
        tabBarOptions={{
          activeTintColor: '#6C57EC',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="home" component={UserHomeHome} />
        <Tab.Screen name="video" component={Video} />
        <Tab.Screen name="inbox" component={Inbox} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator> */}
        <UserHomeTabs />
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    paddingTop: height * 0.02
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#6C6C6C',
    borderWidth: 0.5,
    borderRadius: 25,
    backgroundColor: '#FDFDFD',
    height: 50,
    paddingHorizontal: 10,
    width: width * 0.75,
  },
  searchIcon: {
    marginRight: 10,
  },
  gradientContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  shadow: {
    // for ios
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
// for android
    elevation: 5,
    
  }
});
