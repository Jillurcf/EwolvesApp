import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
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

const Tab = createBottomTabNavigator();

const UserHome: React.FC = () => {
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
          <Notifyicons name="circle-notifications" color="#6C6C6C" size={30} />
          <Baricons name="bars" size={30} color="#6C6C6C" />
        </View>
      </View>

      <View style={{ paddingHorizontal: width * 0.05, paddingVertical: height * 0.02, flexDirection: 'row', gap: 10 }}>
        <View style={styles.searchContainer}>
          <SearchIcon name="search" size={20} color="#6C6C6C" style={styles.searchIcon} />
        </View>
        <View style={{width: width * 0.25}}>
          <LinearGradient
            colors={['#9C8EEF', '#6C57EC', "#5443BB"]}
            style={styles.gradientContainer}
          >
            <FilterIcon style={{ padding: 2 }} name="filter" size={30} color="white" />
          </LinearGradient>
        </View>
      </View>

      <Tab.Navigator
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
      </Tab.Navigator>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
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
});
